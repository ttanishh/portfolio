import nodemailer from 'nodemailer';

// Email configuration with fallback
const createTransporter = () => {
  try {
    if (!process.env.EMAIL_PASS) {
      console.log('⚠️ EMAIL_PASS not found in environment variables');
      return null;
    }
    
    return nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'ttaniishh@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    });
  } catch (error) {
    console.error('❌ Failed to create email transporter:', error);
    return null;
  }
};

const transporter = createTransporter();

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      database: 'available',
      email: transporter ? 'configured' : 'not configured',
      environment: process.env.NODE_ENV || 'development',
      email_pass_set: !!process.env.EMAIL_PASS,
      email_user_set: !!process.env.EMAIL_USER
    });
  } catch (error) {
    console.error('❌ [HEALTH CHECK ERROR]', error);
    res.status(500).json({ 
      status: 'ERROR', 
      error: error.message 
    });
  }
} 