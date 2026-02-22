import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  // Base public path
  base: './',
  
  // Build options
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log
        drop_debugger: true, // Remove debugger
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        toplevel: true, // Mangle top-level variable names
        safari10: true, // Safari 10 compatibility
      },
      format: {
        comments: false, // Remove all comments
        ecma: 2020, // Use modern JS
      },
      keep_classnames: false, // Mangle class names
      keep_fnames: false, // Mangle function names
    },
    
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          vendor: ['./script.original.js'],
        },
        // Asset file names
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    
    // Source maps (disabled for production)
    sourcemap: false,
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // CSS code splitting
    cssCodeSplit: true,
  },
  
  // Plugins
  plugins: [
    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // Only compress files larger than 10kb
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  
  // Server options (for development)
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Preview options (for production preview)
  preview: {
    port: 4173,
    open: true,
  },
});
