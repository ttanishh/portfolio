# Firebase Authentication Setup

This guide will help you set up Firebase authentication for your portfolio website.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "tanish-portfolio")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable the following providers:
   - **Email/Password**: Click "Enable" and save
   - **Google**: Click "Enable", configure OAuth consent screen if needed, and save

## Step 3: Get Your Firebase Configuration

1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "Portfolio Web App")
6. Copy the Firebase configuration object

## Step 4: Configure Environment Variables

Create a `.env` file in your project root with the following variables:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Replace the values with your actual Firebase configuration.

## Step 5: Configure Google OAuth (Optional)

If you want to use Google Sign-In:

1. In Firebase Console, go to Authentication > Sign-in method
2. Click on Google provider
3. Add your domain to "Authorized domains"
4. Configure OAuth consent screen in Google Cloud Console if needed

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Visit your app and try to register/login
3. Check Firebase Console > Authentication > Users to see if users are being created

## Security Rules (Optional)

For additional security, you can configure Firebase Security Rules in the Firebase Console.

## Troubleshooting

- **"Firebase App named '[DEFAULT]' already exists"**: This usually means Firebase is being initialized multiple times. Check that you're only importing and initializing Firebase once.
- **"auth/unauthorized-domain"**: Add your domain to the authorized domains in Firebase Console > Authentication > Settings > Authorized domains.
- **"auth/popup-blocked"**: Make sure popups are allowed in your browser for your domain.

## Features Included

- ✅ Email/Password authentication
- ✅ Google OAuth authentication
- ✅ User registration with display name
- ✅ Automatic user state management
- ✅ Logout functionality
- ✅ User avatar and profile display
- ✅ Responsive user menu in header
- ✅ Error handling with user-friendly messages
- ✅ Loading states during authentication
- ✅ Persistent authentication state

Your Firebase authentication is now ready to use! Users will need to sign in or register before accessing your portfolio. 