# StyleByZaga - Luxury Fashion & Lifestyle Platform

## Overview

StyleByZaga is a premium fashion and lifestyle platform that connects high-end clients with luxury fashion services, exclusive products, and verified professional stylists.

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Supabase (PostgreSQL + Authentication)
- **Payments**: Stripe
- **Content Management**: Sanity.io/Notion + Super.so
- **Notifications**: Firebase/Email (SendGrid/Resend)
- **Hosting**: Vercel
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stripe account
- Vercel account (optional for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stylebyzaga.git
   cd stylebyzaga
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables in `.env.local`

4. Start the development server:
   ```bash
   npm run dev
   ```

### Database Setup

1. Create a new Supabase project
2. Run the database migrations from `docs/database_schema.md`
3. Configure Row Level Security (RLS) policies

### Stripe Setup

1. Create a Stripe account
2. Add webhook endpoints
3. Configure products and prices
4. Set up Stripe Connect (for stylist payments)

## Development

### Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
└── tests/              # Test files
```

### Key Features

1. User Authentication
   - Email/password login
   - Social authentication
   - Role-based access control

2. Product Management
   - Product catalog
   - Inventory tracking
   - Image management

3. Stylist Platform
   - Stylist profiles
   - Booking system
   - Portfolio management

4. Payment Processing
   - Secure checkout
   - Subscription management
   - Stylist payments

5. Content Management
   - Blog posts
   - Style guides
   - Look books

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test:watch
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@stylebyzaga.com or join our Slack channel.
