# Email Notification Setup Guide

This guide will help you set up email notifications for collaboration form submissions.

## Prerequisites

1. A Gmail account
2. Gmail App Password (not your regular password)

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

## Step 2: Generate App Password

1. Go to your Google Account settings
2. Navigate to Security
3. Under "2-Step Verification", click on "App passwords"
4. Select "Mail" as the app and "Other" as the device
5. Click "Generate"
6. Copy the 16-character password (it will look like: xxxx xxxx xxxx xxxx)

## Step 3: Create .env File

Create a `.env` file in your project root with the following content:

```env
# Email Configuration for Notifications
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password

# Database Configuration (if needed)
DATABASE_URL="file:./dev.db"

# Server Configuration
PORT=3001
```

## Step 4: Replace Placeholder Values

- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the app password you generated

## Step 5: Restart Server

After creating the `.env` file, restart your development server:

```bash
npm run dev:full
```

## How It Works

- When someone submits a form with purpose "collaborate", you'll receive an email notification
- The email includes all the contact details and a direct reply link
- The notification is sent to the same email address you configured
- If email fails, the form submission is still saved to the database

## Testing

1. Fill out the contact form on your website
2. Select "Collaborate on a project" as the purpose
3. Submit the form
4. Check your email for the notification

## Troubleshooting

### Email not sending
- Verify your Gmail credentials are correct
- Make sure you're using an App Password, not your regular password
- Check that 2-Factor Authentication is enabled
- Verify the `.env` file is in the project root

### Server won't start
- Check that the `.env` file exists and has the correct format
- Verify all environment variables are set correctly

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- App passwords are more secure than regular passwords
- You can revoke app passwords at any time from your Google Account settings 