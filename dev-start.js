#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting development environment...\n');

// Function to find available port
const findAvailablePort = async (startPort) => {
  const net = await import('net');
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(startPort, () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
    server.on('error', () => {
      resolve(findAvailablePort(startPort + 1));
    });
  });
};

// Start the Express server
const startServer = async () => {
  const serverPort = await findAvailablePort(3001);
  console.log(`🔧 Starting server on port ${serverPort}...`);
  
  const server = spawn('node', ['server.js'], {
    stdio: 'inherit',
    cwd: __dirname,
    env: { ...process.env, PORT: serverPort.toString() }
  });

  // Wait a moment for server to start, then start Vite
  setTimeout(() => {
    console.log('\n📱 Starting Vite development server...\n');
    
    const vite = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      cwd: __dirname,
      env: { ...process.env, VITE_API_PORT: serverPort.toString() }
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
};

startServer().catch(console.error); 