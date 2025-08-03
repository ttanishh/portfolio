# Environment Variables Setup Guide

## Required Environment Variables

To fix the connection error and enable full functionality, you need to set up the following environment variables in your Vercel deployment:

### 1. Email Configuration
```
EMAIL_PASS=your_gmail_app_password
```
- Go to your Google Account settings
- Enable 2-factor authentication
- Generate an App Password for "Mail"
- Use this password (not your regular Gmail password)

### 2. Database Configuration (Optional)
```
DATABASE_URL=your_database_connection_string
```
- If using a database service like PlanetScale, Neon, or Supabase
- Format: `postgresql://username:password@host:port/database`

## How to Set Environment Variables in Vercel

### Method 1: Vercel Dashboard
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable:
   - **Name**: `EMAIL_PASS`
   - **Value**: Your Gmail app password
   - **Environment**: Production (and Preview if needed)
4. Click "Save"

### Method 2: Vercel CLI
```bash
vercel env add EMAIL_PASS
```

## Testing Your Setup

After setting up environment variables:

1. **Deploy your changes**
2. **Test the health endpoint**: `https://your-domain.vercel.app/api/health`
3. **Test the contact form** on your website

## Expected Health Check Response

```json
{
  "status": "OK",
  "timestamp": "2025-08-03T13:47:43.452Z",
  "database": "connected",
  "email": "configured",
  "environment": "production"
}
```

## Troubleshooting

### Connection Error Still Appears
1. Check if environment variables are set correctly
2. Verify the health endpoint returns "OK"
3. Check Vercel function logs for errors

### Email Not Working
1. Ensure `EMAIL_PASS` is set correctly
2. Verify it's a Gmail App Password (not regular password)
3. Check if 2FA is enabled on your Google account

### Database Issues
1. Verify `DATABASE_URL` is correct
2. Check if database service is running
3. Ensure database migrations are applied

## Security Notes

- Never commit environment variables to your repository
- Use App Passwords for Gmail (not your main password)
- Regularly rotate your app passwords
- Monitor your Vercel function logs for any issues 