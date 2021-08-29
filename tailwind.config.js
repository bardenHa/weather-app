module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      title: ["Lobster"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active']
    },
  },
  plugins: [],
};
