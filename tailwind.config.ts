import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px', // 640px ~ 767px
      md: '768px', // 768px ~ 1249px
      lg: '1024px',
      xl: '1250px', // 1250px ~
      '2xl': '1480px', // 1480px ~
    },
    extend: {
      fontFamily: {
        batang: ['var(--font-gowun-batang)'],
        gothic: ['var(--font-nanum-gothic)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          600: '#6A6A61',
          500: '#e4f222',
          200: '#F5FF78',
          100: '#feffe1',
        },
        secondary: '#1f1f1f',
        tertiary: {
          600: '#6B6B5B',
          500: '#787868',
          400: '#EEECE5',
          300: '#F4F3EE',
          200: '#FAF9F4',
          50: '#FCFBFA',
        },
        negative: {
          DEFAULT: '#d82c0d',
          light: '#fff4f4',
        },
        positive: {
          DEFAULT: '#2c6ecb',
          light: '#f2f7fe',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#DEE2E6',
          400: '#ccd2d8',
          500: '#aeb5ba',
          600: '#888e94',
          650: '#646a70',
          700: '#484f54',
          750: '#3a3e43',
          800: '#32363a',
          850: '#28262b',
          900: '#1f2022',
          950: '#171313',
        },
        kakao: '#fee500',
      },
    },
  },

  plugins: [],
};
export default config;
