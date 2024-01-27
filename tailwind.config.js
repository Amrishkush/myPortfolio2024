/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png,jpg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amsterdamFour: ["amsterdamFour", "sans-serif"] ,
        pacificoRegular: ["pacificoRegular",  "sans-serif"],
        poppins: ["poppins" , "sans-serif"],
        jost: ["jost", "sans-serif"]
      },
      colors: {
        primary: ""

      },
    },
  },
  plugins: [],
}