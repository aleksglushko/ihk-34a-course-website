import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/ihk-34a-course-website/' : '/',
    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        host: '0.0.0.0', // Allow external connections
        port: 5173,
        allowedHosts: [
            '*',
        'c39ece17dfb6.ngrok-free.app', // Your ngrok domain
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app' // Allow any ngrok-free.app subdomain
        ]
    }
})
