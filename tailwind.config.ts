import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: { 900:"#0B1020", 800:"#121A33", 100:"#E8EDFF" } },
      boxShadow: { soft: "0 10px 35px rgba(0,0,0,0.12)" }
    },
  },
  plugins: [],
};
export default config;
