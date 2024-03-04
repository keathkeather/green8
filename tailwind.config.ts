import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors:{
        'diamondHead': '#6FCF97',
        'mead' : '#FFC978',
        'goop' : '#A1F65E',
        'navBlack' : '#141213',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
};
export default config;
