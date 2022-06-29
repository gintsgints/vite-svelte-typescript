const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],

  daisyui:{
    themes: [
      {
        mytheme: {
          primary: "#ff6c00",
          secondary: "#fc7753",
          accent: "#333333",
          neutral: "#1a1a1a",
          "base-100": "#565554",

          "--rounded-btn": "0"
        }
      }
    ]
  }
};

module.exports = config