/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber1: "#7fe7f1",
      },
      fontFamily: {
        cyberfont: ["Ubuntu"],
        clash: ["Clash Display"],
        rubik: ["Rubik Glitch"],
        panchang: ["Panchang"],
        ranade: ["Ranade"],
        quicksand: ["Quicksand"],
      },
      animation: {
        "border-pulse": "border-pulse 3s infinite",
      },
      keyframes: {
        "border-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(100, 116, 139, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 0 4px rgba(100, 116, 139, 0)",
          },
        },
      },
    },
  },
};
