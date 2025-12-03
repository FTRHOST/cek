import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load environment variables from .env files
    // The third parameter is the prefix for client-side environment variables (default 'VITE_')
    const env = loadEnv(mode, process.cwd(), 'VITE_'); 

    return {
      server: {
        host: true,
      },
      plugins: [react()],
      // Define 'process.env.API_KEY' for the client-side code,
      // mapping it to the 'VITE_GEMINI_API_KEY' from the environment.
      // This ensures the @google/genai SDK can find the API key.
      define: {
        'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});