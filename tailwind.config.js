/** @type {import('tailwindcss').Config} */
export default {
  // This preset option pulls in all of the Tailwind CSS configuration.
  presets: [
    require('decanter')
  ],
  // This should point to your source files as Tailwind CSS scans your files for the css classes you use.
  content: ["./src/**/*.{html,js,jsx,astro}"],
  theme: {
    extend: {},
  },
  plugins: [],
}