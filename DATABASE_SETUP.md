# Database Setup Guide

## Step 1: Create a NeonDB Database

1. Go to [NeonDB](https://neon.tech) and create an account
2. Create a new project
3. Copy your database connection string

## Step 2: Set Up Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

# Server
PORT=3001

# Firebase (if you haven't set these up yet)
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## Step 3: Run Database Migrations

```bash
npx prisma migrate dev
```

This will create the `ContactMessage` table in your database.

## Step 4: Start the Development Environment

```bash
npm run dev:full
```

This will start both:
- Express server on port 3001 (handles API requests)
- Vite dev server on port 8080 (frontend)

## Step 5: Test the Contact Form

1. Navigate to `http://localhost:8080`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your database to see the submitted data

## Database Schema

The contact form will store data in the `ContactMessage` table:

```sql
CREATE TABLE "ContactMessage" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Troubleshooting

### If you get a connection error:
1. Make sure your `DATABASE_URL` is correct
2. Check that your NeonDB database is active
3. Verify the SSL mode is set to `require`

### If the form submission fails:
1. Check that the Express server is running on port 3001
2. Look at the server console for error messages
3. Check the browser console for network errors

### If Prisma client generation fails:
1. Make sure you're in the project root directory
2. Run `npx prisma generate` again
3. Check that the schema file is valid

## Next Steps

Once everything is working:
1. Deploy your Express server to a hosting platform
2. Update the API URL in `ContactSection.tsx` to point to your deployed server
3. Deploy your frontend to a static hosting service 