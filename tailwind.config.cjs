/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',

        bluePrimary: {
          400: "hsl(180, 66%, 49%)",
        },

        purplePrimary: {
          950: "hsl(257, 27%, 26%)",
        },

        redSecondary: {
          400: "hsl(0, 87%, 67%)",
        },

        greyNeutral: {
          400: "hsl(0, 0%, 75%)",
          500: "hsl(257, 7%, 63%)",
          900: "hsl(255, 11%, 22%)",
          950: "hsl(260, 8%, 14%)",
        },
      },
    },
  },
  plugins: [],
};
