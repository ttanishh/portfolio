# Vercel Environment Variables Setup

## 🚨 **URGENT: Set Environment Variables in Vercel**

The connection error is happening because the environment variables are not set in Vercel. Follow these steps:

### **Step 1: Go to Vercel Dashboard**
1. Visit: https://vercel.com/dashboard
2. Click on your project: `cosmic-forge-tanish`

### **Step 2: Add Environment Variables**
1. Go to **Settings** → **Environment Variables**
2. Click **Add New**
3. Add these variables one by one:

| Variable Name | Value |
|---------------|-------|
| `DATABASE_URL` | `postgresql://portfolio_owner:npg_uOPA7D1tHdfK@ep-round-silence-a1eymp50-pooler.ap-southeast-1.aws.neon.tech/portfolio?sslmode=require&channel_binding=require` |
| `EMAIL_PASS` | `guck wgdf evjv cvzs` |
| `EMAIL_USER` | `ttaniishh@gmail.com` |
| `NODE_ENV` | `production` |

### **Step 3: Deploy**
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Wait for deployment to complete

### **Step 4: Test**
1. Visit your website
2. Try the contact form
3. Check if connection error is gone

## **What I Fixed:**

✅ **API URL Issue**: Changed from hardcoded URL to relative `/api/contact`  
✅ **CORS Configuration**: Updated to handle any Vercel deployment  
✅ **Bundle Size**: Optimized chunk splitting  
✅ **Error Handling**: Improved server error handling  

## **Expected Result:**
- ✅ Connection error disappears
- ✅ Contact form works
- ✅ Email notifications work
- ✅ Database connection works

**The deployment should work perfectly once you set the environment variables in Vercel!** 