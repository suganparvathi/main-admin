/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F3F3FF",
        tertiary: "#C7B6E8",
        quaternary: "#7338E2",
        green: "#24D199",
        primaryText: "#2A2A2B",
        secondaryText: "#2A2A2B",
        tertiaryText: "#2A2A2B",
        redText : "#FF0000",
        gn: "#407132",
        greenText:"#19D43B",
        LightPink:"#D86D8D",
        gy:"#B2DF8A",
         bl:"#1F78B4",
         g:"#767676",
         bl:" #3752B4",
         ww:"#7338E2",


        
        
      },
      backgroundImage: {
        "signin-cover": "url(./assets/images/signin-cover.png)",
        "signup-cover": "url(./assets/images/signup-cover.svg)",
        calendar: "url(./assets/images/calendar.png)",
        "driver-cover": "url(./assets/images/driver-cover.svg)",
        "add-driver-cover": "url(./assets/images/add-driver.png)",
        "wallet-profile": "url(./assets/images/wallet.png)",
        "auto": "url(./assets/images/Icon ionic-ios-wallet.png)",
         "logo": "url(./assets/images/Icon ionic-md-wallet.png)",
      },
      screens: {
        "mb" : "500px"
      }
    },
  },
  // plugins: [],
  "plugins": ["macros"]
}
