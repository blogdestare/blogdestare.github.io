/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./themes/**/*.html', './templates/**/*.html', './content/**/*.md'],
    theme: {
        gap: {
            '10': '2.5rem', /* 40px */
            '11': '2.75rem',
        },
        extend: {
            colors: {
                ...defaultColors,
                ...{
                    green0: '#86efac',
                    green1: '#4ade80',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
