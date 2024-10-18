import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "themis-orange": "#F97615",
        "themis-green": "#29A340",
        "themis-yellow": "#DFBA41",
        "themis-purple": "#6815F9",
        "themis-light-gray": "#ECECEC",
        "themis-medium-gray": "#5C5C5C",
        "themis-dark": "#2B2B2B",
        "themis-slate": "#404A59",
        "themis-text-gray": "#343434",
        "themis-text-light-gray": "#989898",
        "themis-border": "#B9B9B9",
      },
    },
  },
  plugins: [],
};
export default config;
