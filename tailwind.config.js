/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      arial: [" Arial, Helvetica, sans-serif" ],
      opensans: ["Open Sans, sans-serif"],
    },
    width: {
      curW: "window.innerWidth"
    },
    fontWeight: {
      betasemibold: 550,
    },
    fontSize: {
      13: "13px",
      14: "14px",
      20: "20px",
      26: "26px",
      28: "28px",
      24: "24px",
      32: "32px",
      48: "48px",
      36: "36px",
    },
    colors: {
      "stone-300": "#333",
      "blueSlogan" : "#279DD8",
      "hcontent" : "#009B77"
    },
    backgroundColor: {
      "asidebar" : "#005568",
      "navbar" : "#B0CFBF",
      "slogan" : "#C4C4C4",
      "darkorange" : "#FF8C00",
      "fixbar" : "#008080",
      "footerbg": "#005586",
      "divide": "#00FFFF",
    },
    animation: {
      'border-pulse': 'borderPulse 2.5s cubic-bezier(0, -0.19, 0.38, 0.33) infinite',
      'bounce': 'bounce 1.7s infinite'
    },

    
  },
},    
  plugins: [Myclass],
}