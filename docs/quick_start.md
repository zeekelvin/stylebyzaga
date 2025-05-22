# StyleByZaga Quick Start Guide

## 5-Minute Setup

Follow these steps to get the StyleByZaga application running locally in under 5 minutes.

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/stylebyzaga.git

# Navigate to the project
cd stylebyzaga/frontend

# Install dependencies
npm install
```

### 2. Configure Environment

```bash
# Copy environment template
cp .env.example .env.local

# Open .env.local and add these required variables
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Access the Application

Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

## Verify Installation

### Expected Homepage Elements

1. Hero section with fashion showcase
2. Featured products grid
3. Stylist profiles
4. Luxury brand logos

### Quick Tests

1. **Navigation**
   - Click menu items
   - Check responsive layout
   - Verify links work

2. **Images**
   - All images should load
   - Hover effects should work
   - Lazy loading should function

3. **Interactivity**
   - Buttons should be clickable
   - Forms should be functional
   - Animations should be smooth

## Common Issues

### Images Not Loading
- Check public directory structure
- Verify image paths
- Clear browser cache

### Styling Issues
- Ensure Tailwind is compiled
- Check for CSS conflicts
- Verify browser compatibility

### Server Errors
- Confirm port 3000 is available
- Check environment variables
- Verify Node.js version (18+)

## Next Steps

1. Set up Supabase connection
2. Configure Stripe integration
3. Add content management
4. Implement authentication

## Need Help?

- Check the full documentation in `/docs`
- Join our Discord community
- Submit an issue on GitHub
- Email: support@stylebyzaga.com
