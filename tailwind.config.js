/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl":"1440px",
        "3xl":"1920px",
        },
        container: {
          center:true,
          padding:{
            DEFAULT:"1rem",
            sm:"3rem",
            lg:"5rem",
            xl:"6rem",
            "2xl":"8rem",
            "3xl":"9rem",
          },


        },
    },
  },
  plugins: [],
}
