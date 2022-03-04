const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./index.html", "./index-menu.html", "./index-menu-sub1.html"],
  theme: {
    extend: {
      colors: {
        'lightbrown' : '#64574b',
        'darkbrown' : '#3b3534',
      
      }
    },
  },
  plugins: [],
}
