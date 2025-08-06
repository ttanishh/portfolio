import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1000, // Increase to 1MB to avoid warnings
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom'],
          
          // UI Framework - split Radix UI into smaller chunks
          'radix-core': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu', 
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar'
          ],
          'radix-forms': [
            '@radix-ui/react-checkbox',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-select',
            '@radix-ui/react-switch',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group'
          ],
          'radix-layout': [
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip'
          ],
          'radix-utils': [
            '@radix-ui/react-label',
            '@radix-ui/react-progress',
            '@radix-ui/react-slot',
            '@radix-ui/react-toast'
          ],
          
          // Icons and styling
          'icons': ['lucide-react', 'react-icons'],
          'styling': ['tailwindcss-animate'],
          
          // Utility libraries
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority', 'cmdk'],
          
          // Form handling
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Data and state management
          'data': ['@tanstack/react-query', 'date-fns'],
          
          // Charts and UI components
          'charts': ['recharts'],
          'ui-components': ['embla-carousel-react', 'react-resizable-panels', 'vaul'],
          
          // Routing
          'routing': ['react-router-dom'],
          
          // Notifications
          'notifications': ['sonner']
        }
      }
    }
  },
  optimizeDeps: {
    include: [],
    exclude: ['firebase']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['firebase']
  },
  plugins: [
    react(),
  ],
}));
