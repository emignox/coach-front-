/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#EF5E55",
      },
      backgroundImage: {
        footer_background: "url('/footer.svg')",
      },
    },
  },
  plugins: [],
};
