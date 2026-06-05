/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2c3e50',
          dark: '#1a252f',
          light: '#3d5266',
        },
        accent: {
          DEFAULT: '#e53e3e',
          hover: '#c53030',
          light: '#fc8181',
        },
        muted: '#6c757d',
        surface: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 32px rgba(44, 62, 80, 0.08)',
        'card-hover': '0 16px 48px rgba(44, 62, 80, 0.14)',
        glow: '0 0 24px rgba(229, 62, 62, 0.2)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
