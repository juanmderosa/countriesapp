import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      DarkModeDarkBlueElements: "#2b3945",
      DarkModeDarkBlueBg: "#202c37",
      LightModeDarkBlueText: "#111517",
      LightModeInputLightGray: "#858585",
      LightModeLightGrayBg: "#fafafa",
      WhiteLight: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
export default config;
