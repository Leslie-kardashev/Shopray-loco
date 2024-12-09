/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#858585",
          "200": "#777",
          "300": "#2c2c2c",
          "400": "#2a2b2b",
          "500": "#2a2a2a",
          "600": "#212724",
          "700": "rgba(255, 255, 255, 0.33)",
        },
        white: "#fff",
        springgreen: "#00ff62",
        black: "#000",
        darkslategray: {
          "100": "#434343",
          "200": "#3b3b3b",
          "300": "#303b35",
          "400": "rgba(16, 59, 57, 0.43)",
        },
        silver: "#b5b5b5",
        red: {
          "100": "#ff0004",
          "200": "rgba(255, 28, 28, 0.48)",
        },
        dimgray: "#515151",
        limegreen: {
          "100": "#00cc2e",
          "200": "rgba(0, 204, 46, 0.09)",
        },
        gainsboro: "#dedede",
      },
      spacing: {},
      fontFamily: {
        "instrument-sans": "'Instrument Sans'",
      },
      borderRadius: {
        "6xs": "7px",
        "10xs": "3px",
        "4xs": "9px",
        "2xs": "11px",
        "12xs-2": "0.2px",
        "8xs": "5px",
        "10xl": "29px",
        "36xl": "55px",
        "3xs": "10px",
        "20xl": "39px",
        "15xl": "34px",
        "6xl": "25px",
      },
    },
    fontSize: {
      sm: "14px",
      mini: "15px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "21xl": "40px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      "13xl": "32px",
      "2xs": "11px",
      "5xs": "8px",
      "6xs": "7px",
      "7xl": "26px",
      "71xl": "90px",
      "26xl": "45px",
      "8xl": "27px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
