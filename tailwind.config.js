/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-black": "#1a232e",
        "secondary-white": "#c7c7c7",
        primary: "#a134c7",
        secondary: "#a509ff",
      },
      backgroundImage: {
        "gradient-nav":
          "linear-gradient(270deg, #2E073F, #d18aea 26%, #EBD3F8 39%, #AD49E1 50%, #7A1CAC);",
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
      },
      boxShadow: {
        custom: "0px 0px 30px #a509ff",
      },
      brightness: {
        110: "1.1",
      },
    },
  },
  plugins: [],
};
