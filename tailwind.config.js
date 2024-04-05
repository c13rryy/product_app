/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ls: "320px",
      es: "380px",
      xs: "500px",
      mds: "600px",
      sm: "768px",
      xl: "1024px",
      md: "1100px",
      lg: "1300px",
      "2xl": "1440px",
      xh: "1600px",
      "3xl": "1920px",
      mobile: { max: "639px" },
      tall: { raw: "(max-height: 657px)" },
    },
  },
  plugins: [],
}

