Local Development Setup Guide
═════════════════════════════

Prerequisites

1. Node.js (Latest LTS version recommended)
2. npm or yarn package manager
3. Git

Setup Instructions

1. Environment Configuration
1. Create a local environment file:
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ bash                       ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  cp .env.example .env.local  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. Configure the following required environment variables in .env.local:
• NEXT_PUBLIC_SUPABASE_URL
• NEXT_PUBLIC_SUPABASE_ANON_KEY
• NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
• STRIPE_SECRET_KEY
• STRIPE_WEBHOOK_SECRET

The base URL is already set to <http://localhost:3000> in the example file.

2. Install Dependencies
┏━━━━━━━━━━━━━━┓
┃ bash         ┃
┗━━━━━━━━━━━━━━┛

# Using npm

  npm install

# Using yarn  

  yarn install  
━━━━━━━━━━━━━━━━

Running the Application

Development Mode
┏━━━━━━━━━━━━━━┓
┃ bash         ┃
┗━━━━━━━━━━━━━━┛

# Using npm

  npm run dev

# Using yarn  

  yarn dev
━━━━━━━━━━━━━━━━

The application will be available at: ⧉ <http://localhost:3000>

Running Tests
┏━━━━━━━━━━━━━━┓
┃ bash         ┃
┗━━━━━━━━━━━━━━┛

# Using npm

  npm test

# Using yarn  

  yarn test
━━━━━━━━━━━━━━━━

Type Checking
┏━━━━━━━━━━━━━━━━━━━━┓
┃ bash               ┃
┗━━━━━━━━━━━━━━━━━━━━┛

# Using npm

  npm run type-check  

# Using yarn

  yarn type-check
━━━━━━━━━━━━━━━━━━━━━━

Linting
┏━━━━━━━━━━━━━━┓
┃ bash         ┃
┗━━━━━━━━━━━━━━┛

# Using npm

  npm run lint  

# Using yarn  

  yarn lint
━━━━━━━━━━━━━━━━

Verification Steps

1. Verify Dependencies:
  ┏━━━━━━━━━━━━━━━━━━┓
  ┃ bash             ┃
  ┗━━━━━━━━━━━━━━━━━━┛
    npm ls --depth=0  
  ━━━━━━━━━━━━━━━━━━━━
2. Check Application Status:
  • Open ⧉ <http://localhost:3000> in your browser
  • Verify the following components load:
    ◦ Hero section
    ◦ Featured Products
    ◦ Luxury Brands
    ◦ Stylist Showcase
3. Test Stripe Integration:
  • Ensure your Stripe keys are configured
  • Test the checkout process using Stripe test card numbers

Additional Notes

1. The application uses:
  • Next.js 13.5.4
  • React 18.2.0
  • TypeScript
  • Tailwind CSS for styling
  • Supabase for backend
  • Stripe for payments
2. Testing is set up with:
  • Jest
  • React Testing Library
3. Optional integrations (configure if needed):
  • Email service (SendGrid or Resend)
  • Firebase
  • Content Management (Sanity.io or Notion)

Troubleshooting

If you encounter issues:

1. Environment Variables:
  • Verify all required variables in .env.local
  • Check for any missing or incorrect API keys
2. Build Errors:
  • Clear the Next.js cache: rm -rf .next
  • Reinstall dependencies: rm -rf node_modules && npm install
3. Type Errors:
  • Run npm run type-check to identify type issues
  • Check for any missing type definitions
