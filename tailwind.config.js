/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans"],
      },
      backgroundImage: {
        darkDeskTopImage: "url('./assets/images/bg-desktop-dark.jpg')",
        lightDeskTopImage: "url('./assets/images/bg-desktop-light.jpg')",
        darkMobileImage: "url('./assets/images/bg-mobile-dark.jpg')",
        lightMobileImage: "url('./assets/images/bg-mobile-dark.jpg')",
        checkImage: "url('./assets/images/icon-check.svg')",
        checkBoxBackGroundColor: "linear-gradient(#57ddff, #c058f3)",
      },
      colors: {
        veryLightGray: "hsl(0, 0%, 98%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        checkBox1BackgroundColor: "hsl(192, 100%, 67%)",
        checkBox2BackgroundColor: "hsl(280, 87%, 65%)",
        checkBoxBorderColor: "#457b9d",
        brightBlue: "#3a7bfd",
        darkBackgroundColor: "hsl(235, 21%, 11%)",
        lightBackgroundColor: "hsl(236, 33%, 92%)",
        darkCardBackgroundColor: "hsl(235, 24%, 19%)",
        lightCardBackgroundColor: "hsl(0, 0%, 98%)",
        darkTextColor: "hsl(0, 0%, 73%)",
        lightTextColor: "hsl(0, 0%, 26%)",
        darkBorderColor: "hsl(233, 14%, 35%)",
        lightBorderColor: "hsl(233, 11%, 84%)",
      },
    },
  },
  plugins: [],
};
