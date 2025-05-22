# Local Development Guide for StyleByZaga

## Prerequisites

1. **Node.js and npm**
   - Required: Node.js version 18.0.0 or higher
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Environment Setup**
   - Copy the environment template:
     ```bash
     cp .env.example .env.local
     ```

   - Required environment variables for local development:
     ```plaintext
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     NEXT_PUBLIC_BASE_URL=http://localhost:3000
     ```

## Installation Steps

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Verify Installation**
   - Check for any missing dependencies:
     ```bash
     npm ls
     ```
   - Look for any error messages or unmet peer dependencies

## Starting the Development Server

1. **Start the Server**
   ```bash
   npm run dev
   ```

2. **Expected Output**
   ```plaintext
   > stylebyzaga@0.1.0 dev
   > next dev

   - ready started server on [::]:3000
   - event compiled client and server successfully
   - wait compiling...
   - event compiled successfully
   ```

## Accessing the Application

1. **Local URL**
   - Main application: [http://localhost:3000](http://localhost:3000)
   - Default ports:
     - Next.js development server: 3000
     - Supabase local development: 54321

2. **Browser Support**
   - Recommended browsers:
     - Chrome (latest)
     - Firefox (latest)
     - Safari (latest)
     - Edge (latest)

## Development Features

1. **Hot Reloading**
   - Changes to React components will automatically refresh
   - CSS changes are instantly reflected
   - API route changes require manual refresh

2. **Development Tools**
   - React Developer Tools (browser extension)
   - Redux DevTools (if using Redux)
   - Next.js specific features:
     - Fast Refresh
     - Error overlay
     - Source maps

## Common Issues and Solutions

1. **Port Already in Use**
   ```plaintext
   Error: listen EADDRINUSE: address already in use :::3000
   ```
   Solution:
   ```bash
   # Find and kill the process using port 3000
   lsof -i :3000
   kill -9 <PID>
   ```

2. **Missing Dependencies**
   ```plaintext
   Error: Cannot find module '@/components/...'
   ```
   Solution:
   ```bash
   # Reinstall dependencies
   rm -rf node_modules
   npm install
   ```

3. **Environment Variables Not Loading**
   ```plaintext
   Error: Invalid Supabase credentials
   ```
   Solution:
   - Verify .env.local exists
   - Restart the development server
   - Check variable names match .env.example

## Development Workflow

1. **Code Changes**
   - Edit files in the `src` directory
   - Changes are automatically compiled
   - Browser refreshes to show updates

2. **API Development**
   - Edit files in `src/app/api`
   - Use tools like Postman or Thunder Client for testing
   - Webhook testing requires ngrok or similar

3. **Database Changes**
   - Access Supabase dashboard
   - Run migrations when schema changes
   - Test queries in SQL editor

## Performance Optimization

1. **Development Mode**
   - Slower than production
   - Includes source maps
   - Additional debugging information

2. **Build Analysis**
   ```bash
   # Analyze bundle size
   npm run build -- --analyze
   ```

3. **Memory Usage**
   - Default Node.js memory: 512MB
   - Increase if needed:
     ```bash
     export NODE_OPTIONS="--max_old_space_size=4096"
     ```

## Testing Local Changes

1. **Component Testing**
   ```bash
   npm test
   ```

2. **E2E Testing**
   ```bash
   npm run cypress
   ```

3. **Production Build**
   ```bash
   npm run build
   npm start
   ```

## Debugging

1. **Server-Side**
   - Add `debugger` statements
   - Use Chrome DevTools for Node.js
   - Check server logs in terminal

2. **Client-Side**
   - Browser DevTools (F12)
   - React DevTools components tab
   - Network tab for API calls

3. **Database**
   - Supabase Dashboard
   - Database logs
   - Query performance analysis

## Recommended Development Tools

1. **Code Editor**
   - VS Code with extensions:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense
     - TypeScript support

2. **Browser Extensions**
   - React Developer Tools
   - Redux DevTools
   - Supabase DevTools

3. **API Testing**
   - Postman or Insomnia
   - Thunder Client VS Code extension
   - curl commands for simple tests

## Security Considerations

1. **Local SSL**
   - HTTPS not required for local development
   - Use mkcert if HTTPS needed
   - Update BASE_URL accordingly

2. **API Keys**
   - Use development keys locally
   - Never commit .env files
   - Rotate keys if accidentally exposed

3. **User Data**
   - Use test accounts
   - Sanitize production data if imported
   - Follow GDPR guidelines even in development
