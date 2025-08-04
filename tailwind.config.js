/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#006400',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #006400 0%, #22c55e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'gradient-hero':
          'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
