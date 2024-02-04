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
                    black: '#000000',
                    green0: '#86efac',
                    green1: '#4ade80',
                },
                height: {
                    '6': '1.5rem',
                    '8': '2rem',
                    '16': '4rem',
                    '64': '16rem',
                    '72': '18rem',
                    '80': '20rem',
                    '96': '24rem',
                    '128': '32rem',
                    'full': '100%',
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
