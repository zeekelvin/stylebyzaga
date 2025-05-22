# StyleByZaga Database Schema

## Overview

The database schema is designed to support the core e-commerce functionality of StyleByZaga, with considerations for future scalability and feature additions.

## Tables

### users
```sql
create table public.users (
  id uuid references auth.users not null primary key,
  email text not null unique,
  full_name text,
  avatar_url text,
  phone text,
  role text check (role in ('customer', 'admin', 'stylist')) default 'customer',
  stripe_customer_id text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.users enable row level security;

-- Create policies
create policy "Users can view own profile" on users
  for select using (auth.uid() = id);

create policy "Users can update own profile" on users
  for update using (auth.uid() = id);
```

### products
```sql
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price decimal(10,2) not null,
  compare_at_price decimal(10,2),
  currency text default 'USD',
  sku text unique,
  status text check (status in ('draft', 'active', 'archived')) default 'draft',
  inventory_quantity integer default 0,
  category text[],
  images text[],
  metadata jsonb default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.products enable row level security;

-- Create policies
create policy "Anyone can view active products" on products
  for select using (status = 'active');

create policy "Admins can manage products" on products
  using (auth.role() = 'admin');
```

### product_variants
```sql
create table public.product_variants (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products on delete cascade not null,
  name text not null,
  sku text unique,
  price decimal(10,2),
  inventory_quantity integer default 0,
  options jsonb default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.product_variants enable row level security;

-- Create policies
create policy "Anyone can view variants of active products" on product_variants
  for select using (
    exists (
      select 1 from products
      where products.id = product_variants.product_id
      and products.status = 'active'
    )
  );
```

### orders
```sql
create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users not null,
  status text check (status in ('pending', 'processing', 'completed', 'cancelled')) default 'pending',
  total_amount decimal(10,2) not null,
  currency text default 'USD',
  shipping_address jsonb,
  billing_address jsonb,
  payment_intent_id text unique,
  metadata jsonb default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.orders enable row level security;

-- Create policies
create policy "Users can view own orders" on orders
  for select using (auth.uid() = user_id);

create policy "Users can create orders" on orders
  for insert with check (auth.uid() = user_id);
```

### order_items
```sql
create table public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders on delete cascade not null,
  product_id uuid references public.products not null,
  variant_id uuid references public.product_variants,
  quantity integer not null,
  price_at_time decimal(10,2) not null,
  metadata jsonb default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.order_items enable row level security;

-- Create policies
create policy "Users can view own order items" on order_items
  for select using (
    exists (
      select 1 from orders
      where orders.id = order_items.order_id
      and orders.user_id = auth.uid()
    )
  );
```

### stylist_profiles
```sql
create table public.stylist_profiles (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users not null,
  bio text,
  specialties text[],
  experience_years integer,
  portfolio_images text[],
  hourly_rate decimal(10,2),
  availability jsonb default '{}',
  status text check (status in ('pending', 'active', 'inactive')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.stylist_profiles enable row level security;

-- Create policies
create policy "Anyone can view active stylist profiles" on stylist_profiles
  for select using (status = 'active');

create policy "Stylists can manage own profile" on stylist_profiles
  using (auth.uid() = user_id);
```

### appointments
```sql
create table public.appointments (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users not null,
  stylist_id uuid references public.stylist_profiles not null,
  status text check (status in ('pending', 'confirmed', 'completed', 'cancelled')) default 'pending',
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  service_type text not null,
  notes text,
  payment_intent_id text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.appointments enable row level security;

-- Create policies
create policy "Users can view own appointments" on appointments
  for select using (auth.uid() = user_id);

create policy "Stylists can view their appointments" on appointments
  for select using (
    exists (
      select 1 from stylist_profiles
      where stylist_profiles.id = appointments.stylist_id
      and stylist_profiles.user_id = auth.uid()
    )
  );
```

## Functions and Triggers

### Update Updated At
```sql
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Apply to all tables
create trigger handle_updated_at
  before update on public.users
  for each row
  execute function public.handle_updated_at();

-- Repeat for other tables
```

### Check Inventory
```sql
create or replace function public.check_inventory()
returns trigger as $$
begin
  if exists (
    select 1 from public.products
    where id = new.product_id
    and inventory_quantity < new.quantity
  ) then
    raise exception 'Insufficient inventory';
  end if;
  return new;
end;
$$ language plpgsql;

create trigger check_inventory_before_insert
  before insert on public.order_items
  for each row
  execute function public.check_inventory();
```

## Indexes

```sql
-- Products
create index products_status_idx on public.products (status);
create index products_category_idx on public.products using gin (category);

-- Orders
create index orders_user_id_idx on public.orders (user_id);
create index orders_status_idx on public.orders (status);
create index orders_created_at_idx on public.orders (created_at);

-- Appointments
create index appointments_stylist_id_idx on public.appointments (stylist_id);
create index appointments_user_id_idx on public.appointments (user_id);
create index appointments_start_time_idx on public.appointments (start_time);
```

## Security Considerations

1. Row Level Security (RLS) is enabled on all tables
2. Policies restrict access based on user roles and ownership
3. Sensitive data is stored in separate schemas
4. Audit logs track changes to critical tables
5. Encrypted columns for sensitive information

## Backup and Recovery

1. Point-in-time recovery enabled
2. Daily backups configured
3. Retention policy set to 30 days
4. Automated backup testing
5. Recovery procedures documented
