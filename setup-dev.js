#!/usr/bin/env node

import { spawn } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Setting up development environment...\n');

// Check if .env file exists
const envPath = join(__dirname, '.env');
if (!existsSync(envPath)) {
  console.log('📝 Creating .env file from template...');
  const envContent = `# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Email Configuration (for contact form)
EMAIL_PASS=your_gmail_app_password_here

# Database Configuration (optional)
DATABASE_URL=your_database_connection_string_here

# Server Configuration
PORT=3001
`;
  
  writeFileSync(envPath, envContent);
  console.log('✅ .env file created! Please update it with your actual values.\n');
} else {
  console.log('✅ .env file already exists\n');
}

// Install dependencies
console.log('📦 Installing dependencies...');
const install = spawn('npm', ['install'], {
  stdio: 'inherit',
  cwd: __dirname
});

install.on('close', (code) => {
  if (code === 0) {
    console.log('\n✅ Dependencies installed successfully!\n');
    
    // Generate Prisma client
    console.log('🔧 Generating Prisma client...');
    const prisma = spawn('npx', ['prisma', 'generate'], {
      stdio: 'inherit',
      cwd: __dirname
    });
    
    prisma.on('close', (prismaCode) => {
      if (prismaCode === 0) {
        console.log('\n✅ Prisma client generated!\n');
        console.log('🎉 Development environment setup complete!\n');
        console.log('📋 Next steps:');
        console.log('1. Update .env file with your Firebase and email credentials');
        console.log('2. Run "npm run dev:full" to start both server and client');
        console.log('3. Visit http://localhost:8080 to see your portfolio');
        console.log('\n🔧 Available commands:');
        console.log('- npm run dev:full    # Start both server and client');
        console.log('- npm run dev         # Start only Vite dev server');
        console.log('- npm run server      # Start only Express server');
        console.log('- npm run build       # Build for production');
        console.log('- npm run lint        # Run ESLint');
        console.log('- npm run type-check  # Run TypeScript check');
      } else {
        console.log('\n❌ Prisma generation failed');
      }
    });
  } else {
    console.log('\n❌ Dependency installation failed');
  }
}); 