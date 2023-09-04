import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          600: '#adb902',
          500: '#e4f222',
          200: '#f5ff78',
          100: '#feffe1',
        },
        secondary: '#1f1f1f',
        tertiary: {
          500: '787868',
          400: 'DEDECC',
          300: 'F4F3EE',
          50: 'FCFBFA',
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
          300: '#e9ecef',
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
