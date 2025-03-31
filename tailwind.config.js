/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // Adjust based on your folder structure
  ],

  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
