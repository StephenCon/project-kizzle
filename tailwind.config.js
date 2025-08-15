/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#c41d14',
                    dark: '#8f130f',
                    light: '#ff6f60',
                },
                neutral: {
                    100: '#f2e7e7',
                    900: '#432022',
                },
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.6s ease-out both',
            },
        }
    },
    plugins: []
}
