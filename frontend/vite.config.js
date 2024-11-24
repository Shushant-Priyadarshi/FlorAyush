import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // No need for proxy if you're using fake API in the frontend
    // Remove or comment out the proxy setup since there is no actual backend.
  },
});
