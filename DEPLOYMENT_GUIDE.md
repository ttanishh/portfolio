# 🚀 Portfolio Deployment Guide

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [Vercel CLI](https://vercel.com/cli) (optional, for local testing)

## 🎯 Quick Deployment

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - Go to your project settings
   - Add the following environment variables:
     ```
     FIREBASE_API_KEY=your_firebase_api_key
     FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     FIREBASE_APP_ID=your_app_id
     EMAIL_PASS=your_gmail_app_password
     ```

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🔧 Environment Setup

### 1. Firebase Configuration

Create a `.env` file in the root directory:

```env
# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Email Configuration (Gmail)
EMAIL_PASS=your_gmail_app_password

# Database (Optional)
DATABASE_URL=your_database_url
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password, Google)
4. Get your configuration from Project Settings

### 3. Gmail Setup for Contact Form

1. Enable 2-Factor Authentication on your Gmail
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this password in `EMAIL_PASS`

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server only
npm run server           # Start Express server only
npm run dev:full         # Start both servers concurrently
npm run dev:smart        # Smart development startup

# Production
npm run build            # Build for production
npm start                # Start production server
npm run preview          # Preview production build

# Database
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run type-check       # TypeScript type checking
```

## 🌐 Features

### ✅ Working Features
- **Authentication**: Firebase Auth (Email/Password, Google)
- **Contact Form**: Email notifications for collaboration/resume requests
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized builds with code splitting
- **SEO**: Meta tags and structured data
- **Analytics**: Firebase Analytics integration

### 🔧 Configuration
- **CORS**: Configured for localhost and production domains
- **Email**: Nodemailer with Gmail SMTP
- **Database**: Prisma ORM with PostgreSQL support
- **Build**: Vite with optimized chunks

## 📱 Testing

### Local Testing
```bash
# Test API endpoints
curl http://localhost:3001/api/health
curl http://localhost:3001/api/test

# Test contact form
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","purpose":"collaborate","message":"Hello!"}'
```

### Production Testing
- Visit your deployed URL
- Test contact form functionality
- Verify authentication works
- Check responsive design

## 🔍 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm run build
   # Check for missing dependencies
   npm install
   ```

2. **Port Conflicts**
   ```bash
   # Kill existing processes
   taskkill /f /im node.exe
   ```

3. **Environment Variables**
   - Ensure all required variables are set
   - Check Vercel dashboard for production variables

4. **Email Not Working**
   - Verify Gmail app password
   - Check CORS configuration
   - Test transporter verification

## 📞 Support

For issues or questions:
- Check the [README.md](./README.md) for setup instructions
- Review environment configuration
- Test locally before deploying

## 🎉 Success Checklist

- [ ] Environment variables configured
- [ ] Firebase project set up
- [ ] Gmail app password generated
- [ ] Local development working
- [ ] Production build successful
- [ ] Contact form tested
- [ ] Authentication working
- [ ] Responsive design verified
- [ ] Performance optimized
- [ ] SEO meta tags added 