# Deployment Guide - Tanish Portfolio

This guide will help you deploy your portfolio website to production. The project consists of a React frontend and an Express.js backend with database integration.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)
- **Frontend**: Automatic deployment from GitHub
- **Backend**: Serverless functions
- **Database**: NeonDB integration

### Option 2: Railway
- **Full-stack**: Single platform for frontend, backend, and database
- **Easy setup**: Connect GitHub repo

### Option 3: Render
- **Free tier**: Good for personal projects
- **Simple setup**: Connect GitHub repo

## 📋 Pre-Deployment Checklist

### 1. Environment Variables Setup

Create a `.env` file in your project root:

```env
# Database (NeonDB)
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

# Server
PORT=3001

# Email (Gmail App Password)
EMAIL_PASS=your-gmail-app-password

# Firebase Authentication
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 2. Database Setup

1. **Create NeonDB Database**:
   - Go to [NeonDB](https://neon.tech)
   - Create account and new project
   - Copy connection string

2. **Run Database Migrations**:
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

### 3. Firebase Setup

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create new project
   - Enable Authentication (Email/Password + Google)

2. **Get Configuration**:
   - Project Settings > General > Your Apps
   - Add web app and copy config

### 4. Email Setup

1. **Gmail App Password**:
   - Enable 2-factor authentication
   - Generate app password
   - Use in `EMAIL_PASS` environment variable

## 🎯 Deployment Methods

### Method 1: Vercel Deployment

#### Frontend Deployment
1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy Frontend**:
   ```bash
   vercel --prod
   ```

3. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### Backend Deployment (Vercel Functions)
1. **Create `api` folder** in project root
2. **Move server logic** to Vercel functions
3. **Update API endpoints** to use Vercel functions

### Method 2: Railway Deployment

1. **Connect GitHub**:
   - Go to [Railway](https://railway.app)
   - Connect your GitHub repository

2. **Configure Environment**:
   - Add all environment variables
   - Set build command: `npm install && npm run build`

3. **Deploy**:
   - Railway will automatically deploy on push

### Method 3: Render Deployment

1. **Create Render Account**:
   - Go to [Render](https://render.com)
   - Connect GitHub repository

2. **Configure Service**:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Add environment variables

## 🔧 Production Optimizations

### 1. Update Vite Config for Production

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  }
});
```

### 2. Add Production Scripts

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "start": "node server.js",
    "postinstall": "prisma generate"
  }
}
```

### 3. Update API URLs

Update `src/components/ContactSection.tsx`:

```typescript
const API_URL = import.meta.env.PROD 
  ? 'https://your-backend-url.com' 
  : 'http://localhost:3001';
```

## 🌐 Domain Configuration

### 1. Custom Domain Setup

1. **Purchase domain** (Namecheap, GoDaddy, etc.)
2. **Configure DNS**:
   - A record pointing to your hosting IP
   - CNAME for www subdomain

### 2. SSL Certificate

- **Vercel**: Automatic SSL
- **Railway**: Automatic SSL
- **Render**: Automatic SSL

## 📊 Monitoring & Analytics

### 1. Add Google Analytics

```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Error Monitoring

Add Sentry for error tracking:

```bash
npm install @sentry/react @sentry/tracing
```

## 🔒 Security Considerations

### 1. Environment Variables
- Never commit `.env` files
- Use platform-specific secret management
- Rotate API keys regularly

### 2. CORS Configuration
```javascript
// server.js
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}));
```

### 3. Rate Limiting
```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Database Connection**:
   - Verify `DATABASE_URL` is correct
   - Check SSL requirements
   - Ensure database is active

3. **API Errors**:
   - Verify environment variables
   - Check CORS configuration
   - Test endpoints locally

4. **Authentication Issues**:
   - Verify Firebase configuration
   - Check authorized domains
   - Test OAuth setup

### Debug Commands

```bash
# Test build locally
npm run build
npm run preview

# Test database connection
npx prisma db push

# Check environment variables
node -e "console.log(process.env.DATABASE_URL)"
```

## 📈 Performance Optimization

### 1. Image Optimization
- Use WebP format
- Implement lazy loading
- Compress images

### 2. Code Splitting
- Implement React.lazy()
- Use dynamic imports
- Optimize bundle size

### 3. Caching
- Set appropriate cache headers
- Use CDN for static assets
- Implement service worker

## 🎉 Post-Deployment Checklist

- [ ] Test all functionality
- [ ] Verify contact form works
- [ ] Check authentication flow
- [ ] Test responsive design
- [ ] Verify email notifications
- [ ] Check database connections
- [ ] Test API endpoints
- [ ] Monitor error logs
- [ ] Set up monitoring
- [ ] Configure analytics

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review platform-specific documentation
3. Check error logs in your hosting platform
4. Verify environment variables are set correctly

---

**Happy Deploying! 🚀**

Your portfolio will be live and ready to showcase your amazing work! 