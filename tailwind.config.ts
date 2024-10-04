import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'messiri': "'El Messiri', sans-serif",
        'lato': "'Lato', sans-serif",
      },
      colors: {
        'deep-blue': "#1B3353",
        'off-white': "#FEFEFE",
        'off-blue': "#2BA8E0",
        'light-sky': "#EEFAFF",
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1188px",
        },
      },
      lineHeight: {
        'custom-sm': "32px",
        'custom-lg': "36px",
        'custom-xl': "48px",
      },
      boxShadow: {
        '3xl': "0px 14px 30.5px 0px #1B33531F"
      }
    },
  },
  plugins: [],
};
export default config;
