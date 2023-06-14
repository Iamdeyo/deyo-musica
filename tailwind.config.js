/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        icons: '#EFEEE0',
        iconsHover: '#FACD66',
        darkAlt: '#1A1E1F',
      },
    },
  },
  plugins: [],
};
