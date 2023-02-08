/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6244C5",
        purple: "#6f42c1",
        secondary: "yellow",
      },
      backgroundImage: {
        serviceIcon:
          "https://res.cloudinary.com/ani1997/image/upload/v1668372087/Pragati%20Portfolio%20Website/bg-icon_oxhsoj.png",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "16px",
      tiny: "20px",
      md: "24px",
      lg: "32px",
      xl: "40px",
      "2xl": "56px",
      "3xl": "72px",
    },
  },
  plugins: [],
};
