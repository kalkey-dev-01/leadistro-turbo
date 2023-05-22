import type { Config } from "tailwindcss";

export default {
  content: [""],
  theme: {
    extend: {
      colors: {
        leadistroDark: '#101010',
        leadistroWhite: '#f0f0f0',
        leadistroRed: '#FF9580'
      }
    },
  },
  plugins: [],
} satisfies Config;
