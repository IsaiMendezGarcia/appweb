/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}", // Adjust the paths based on your project structure
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-footernav-100)',
                secondary: '#14171A',
                accent: '#657786',
                background: '#F5F8FA',
                text: '#14171A',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};