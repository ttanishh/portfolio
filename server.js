import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Email configuration with fallback
const createTransporter = () => {
  try {
    if (!process.env.EMAIL_PASS) {
      console.log('⚠️ EMAIL_PASS not found in environment variables');
      return null;
    }
    
    return nodemailer.createTransport({
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

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://cosmic-forge-tanish-lyd1de19t-tanishs-projects-86e64b52.vercel.app']
    : true,
  credentials: true
}));
app.use(express.json());

// Initialize Prisma client with error handling
let prisma;
try {
  const { PrismaClient } = await import('./generated/prisma/index.js');
  prisma = new PrismaClient();
  
  // Test database connection
  await prisma.$connect();
  console.log('✅ Database connected successfully');
} catch (error) {
  console.error('❌ Database connection failed:', error.message);
  console.log('⚠️  Server will start without database functionality');
}

// Email notification function with better error handling
const sendEmailNotification = async (contactData) => {
  try {
    if (!transporter) {
      console.log('⚠️ Email transporter not available');
      return false;
    }

    const { name, email, purpose, message } = contactData;
    console.log(`📧 sendEmailNotification called with:`, { name, email, purpose, messageLength: message.length });
    
    // Determine subject based on purpose
    const subject = purpose === 'resume' 
      ? `📄 Resume Request from ${name}`
      : `🤝 New ${purpose.charAt(0).toUpperCase() + purpose.slice(1)} Request from ${name}`;
    
    // Email to you (the portfolio owner)
    const mailOptions = {
      from: 'ttaniishh@gmail.com',
      to: 'ttaniishh@gmail.com', // Your email address
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">${purpose === 'resume' ? '📄 Resume Request' : '🤝 New Collaboration Request'}</h1>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Name:</strong> ${name}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Purpose:</strong> 
              <span style="background: #667eea; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                ${purpose.charAt(0).toUpperCase() + purpose.slice(1)}
              </span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Message:</strong>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 5px; border-left: 4px solid #667eea;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Reply to ${name}
              </a>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>This message was sent from your portfolio contact form.</p>
              <p>Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('📧 Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('❌ Email notification failed:', error);
    return false;
  }
};

// Contact form endpoint with improved error handling
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, purpose, message } = req.body;

    // Validate required fields
    if (!name || !email || !message || !purpose) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    let savedMessage = null;

    // Try to save to database if available
    if (prisma) {
      try {
        savedMessage = await prisma.contactMessage.create({
          data: {
            name,
            email,
            topic: purpose,
            message,
          },
        });
        console.log('✅ Contact message saved to database:', savedMessage);
      } catch (dbError) {
        console.error('❌ Database save failed:', dbError);
        // Continue without database save
      }
    } else {
      console.log('⚠️ Database not available, skipping save');
    }

    // Send email notification for collaboration and resume requests
    console.log(`🔍 Checking if email should be sent for purpose: "${purpose}"`);
    if (purpose === 'collaborate' || purpose === 'resume') {
      console.log(`📧 Attempting to send email for ${purpose} request...`);
      const emailSent = await sendEmailNotification({ name, email, purpose, message });
      if (emailSent) {
        console.log(`📧 ${purpose} email notification sent`);
      } else {
        console.log('⚠️ Email notification failed, but message was processed');
      }
    } else {
      console.log(`📧 No email sent for purpose: "${purpose}"`);
    }

    return res.status(200).json({ 
      success: true, 
      data: savedMessage || { name, email, purpose, message },
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('❌ [API CONTACT ERROR]', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: prisma ? 'connected' : 'disconnected',
    email: transporter ? 'configured' : 'not configured',
    environment: process.env.NODE_ENV || 'development'
  });
});

// For Vercel serverless functions, export the app instead of listening
export default app;

// Only listen if not in Vercel environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 Contact API available at http://localhost:${PORT}/api/contact`);
    console.log(`💚 Health check at http://localhost:${PORT}/api/health`);
    console.log(`📬 Email notifications: ${transporter ? 'enabled' : 'disabled'}`);
    console.log(`🗄️ Database: ${prisma ? 'connected' : 'disconnected'}`);
  });
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down server...');
  if (prisma) {
    await prisma.$disconnect();
  }
  process.exit(0);
}); 