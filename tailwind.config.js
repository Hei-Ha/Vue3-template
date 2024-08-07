/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                '#000000': '#000000',
                '#FFFFFF': '#FFFFFF',
                '#CCCCCC': '#CCCCCC',
                'pink': 'pink',
            },
        },
    },
    plugins: [],
}