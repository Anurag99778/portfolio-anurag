/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#030712',
          secondary: '#0b1220',
          card: '#131c2e',
        },
        accent: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 50% 0%, rgba(6,182,212,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
};
