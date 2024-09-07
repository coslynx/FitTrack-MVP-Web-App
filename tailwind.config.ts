/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#60A5FA',
        'gray': '#F3F4F6',
      },
      fontFamily: {
        'sans': ['"Inter", sans-serif'],
        'mono': ['"JetBrains Mono", monospace'],
      },
    },
  },
  plugins: [],
};