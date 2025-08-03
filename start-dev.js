#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting development environment...\n');

// Start the Express server
const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

// Wait a moment for server to start, then start Vite
setTimeout(() => {
  console.log('\n📱 Starting Vite development server...\n');
  
  const vite = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    cwd: __dirname
  });

  // Handle process termination
  const cleanup = () => {
    server.kill();
    vite.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
}, 2000);

// Handle server process termination
server.on('close', (code) => {
  console.log(`\n❌ Server process exited with code ${code}`);
  process.exit(code);
}); 