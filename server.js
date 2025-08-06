import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

// Set NODE_ENV to development only for local development
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV = 'development';
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:8080', 
    'http://localhost:5173', 
    'http://localhost:3000',
    'https://ttanishh-portfolio.vercel.app',
    'https://portfolio-ttanishh.vercel.app',
    'https://ttanishh.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Email configuration
const createTransporter = () => {
  try {
    if (!process.env.EMAIL_PASS) {
      console.log('⚠️ EMAIL_PASS not found in environment variables');
      console.log('📧 Email notifications will be disabled');
      return null;
    }
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ttaniishh@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Test the transporter
    transporter.verify((error, success) => {
      if (error) {
        console.error('❌ Email transporter verification failed:', error);
      } else {
        console.log('✅ Email transporter ready');
      }
    });
    
    return transporter;
  } catch (error) {
    console.error('❌ Failed to create email transporter:', error);
    return null;
  }
};

const transporter = createTransporter();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    database: 'connected',
    email: transporter ? 'configured' : 'not configured',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Contact form endpoint
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

    // Send email notification for collaboration and resume requests
    if (purpose === 'collaborate' || purpose === 'resume') {
      if (transporter) {
        const subject = purpose === 'resume' 
          ? `📄 Resume Request from ${name}`
          : `🤝 New ${purpose.charAt(0).toUpperCase() + purpose.slice(1)} Request from ${name}`;
        
        const mailOptions = {
          from: 'ttaniishh@gmail.com',
          to: 'ttaniishh@gmail.com',
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
      } else {
        console.log('⚠️ Email transporter not available');
      }
    }

    return res.status(200).json({ 
      success: true, 
      data: { name, email, purpose, message },
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('❌ Contact API error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Server is running!', 
    timestamp: new Date().toISOString() 
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start server with port fallback
const startServer = (port) => {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
    console.log(`📧 Email configured: ${transporter ? 'Yes' : 'No'}`);
    console.log(`🔧 Environment: ${process.env.NODE_ENV}`);
    console.log(`🌐 CORS enabled for: http://localhost:8080`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Port ${port} is in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('❌ Server error:', err);
    }
  });
};

startServer(PORT);

export default app; 