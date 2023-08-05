/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'day-00': '#ffffff',
      'day-50': 'rgba(48,42,42,0.05)',
      'day-150': 'rgba(48,42,42,0.15)',
      'day-350': 'rgba(48,42,42,0.35)',
      'day-1000': '#302A2A',
      'night-00': '#302A2A',
      'night-50': 'rgba(255,255,255,0.05)',
      'night-150': 'rgba(255,255,255,0.15)',
      'night-350': 'rgba(255,255,255,0.35)',
      'night-1000': '#ffffff',
    },

    screens: {
      lg: '1024',
    },
    spacing: {
      1: '2px',
      16: '32px',
    },
  },
  plugins: [],
};
