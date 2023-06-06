/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--jm-primary-color)',
                'primary-': {
                    100: 'var(--jm-primary-color-100)',
                    200: 'var(--jm-primary-color-200)',
                },
                secondary: 'var(--jm-secondary-color)',
                'secondary-': {
                    200: 'var(--jm-secondary-color-200)',
                    400: 'var(--jm-secondary-color-400)',
                },
                neutral: 'var(--jm-neutral-color)',
                'neutral-': {
                    50: 'var(--jm-neutral-color-50)',
                    100: 'var(--jm-neutral-color-100)',
                    200: 'var(--jm-neutral-color-200)',
                    400: 'var(--jm-neutral-color-400)',
                    900: 'var(--jm-neutral-color-900)',
                },
                pink: 'var(--jm-pink-color)',
                'pink-': {
                    400: 'var(--jm-pink-color-400)',
                },
                danger: 'var(--jm-danger-color)',
                'danger-': {
                    400: 'var(--jm-danger-color-400)',
                    900: 'var(--jm-danger-color-900)',
                },
                turquoise: 'var(--jm-turquoise-color)',
                'turquoise-': {
                    400: 'var(--jm-turquoise-color-400)',
                },
                orange: 'var(--jm-orange-color)',
                'orange-': {
                    400: 'var(--jm-orange-color-400)',
                },
                purple: 'var(--jm-purple-color)',
                white: 'var(--jm-white)',
                black: 'var(--jm-black)',
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
