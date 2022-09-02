/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-softred": "hsl(10, 79%, 65%)",
        "primary-cyan": "hsl(186, 34%, 60%)",
        "neutral-darkbrown": "hsl(25, 47%, 15%)",
        "neutral-mediumbrown": "hsl(28, 10%, 53%)",
        "neutral-cream": "hsl(27, 66%, 92%)",
        "neutral-paleorange": "hsl(33, 100%, 98%)",
      }
    },
  },
  plugins: [],
}

// ### Primary

// - Soft red: hsl(10, 79%, 65%)
// - Cyan: hsl(186, 34%, 60%)

// ### Neutral

// - Dark brown: hsl(25, 47%, 15%)
// - Medium brown: hsl(28, 10%, 53%)
// - Cream: hsl(27, 66%, 92%)
// - Very pale orange: hsl(33, 100%, 98%)