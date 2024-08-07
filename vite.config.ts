import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Tailwindcss from 'tailwindcss'
import Autoprefixer from 'autoprefixer'


export default defineConfig({
    root: './',
    plugins: [vue()],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, './src'),
        },
        extensions: ['.ts', '.jsx', '.js', '.tsx', '.json', '.vue', '.mts', '.mjs'],
    },
    css: {
        postcss: {
            plugins: [
                Tailwindcss,
                Autoprefixer,
            ]
        }
    }
})

