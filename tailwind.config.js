/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Include all Next.js pages & components
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // If using `app/` directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If you have a components folder
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If using `pages/` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
