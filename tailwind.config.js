const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './resources/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
                bebas: ['"Bebas Neue"', 'cursive'],
                syne:  ['Syne', 'sans-serif'],
                dm:    ['"DM Sans"', 'sans-serif'],
            },
            colors: {
                brand: {
                    orange: '#f97316',
                    dark:   '#0f172a',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
