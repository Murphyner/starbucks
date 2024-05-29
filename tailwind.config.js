/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: (screens) => ({
        miri: {
          min: "125px",
          max: "350px"
        },
        // ...screens
      })
    },
  },
  plugins: [],
}

