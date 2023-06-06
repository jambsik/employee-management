/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--jm-primary-color)',
                secondary: 'var(--jm-secondary-color)',
                neutral: 'var(--jm-neutral-color)',
                pink: 'var(--jm-pink-color)',
                danger: 'var(--jm-danger-color)',
                turquoise: 'var(--jm-turquoise-color)',
                orange: 'var(--jm-orange-color)',
                purple: 'var(--jm-purple-color)',
                white: 'var(--jm-white)',
                black: 'var(--jm-black)',
                gold: 'var(--jm-gold-color)',
            },
            fontFamily: {
                sans: [
                    'sans-serif',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    ...fontFamily.sans,
                ],
            },
        },
    },
};
