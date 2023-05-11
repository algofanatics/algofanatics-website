/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
      "grey":"#E3F2F2",
      "avatar":"92E3A93B",
      "career":"#A6A6A6",
      "background":"#E7E5E5",
      "services":"#F7F7F8",
      "backend":"#92E3A9",
      "frontend":"#0000001A",
      "algorithm":"#473BF01A",
      "systemDesign":"##FFA50026", 
      "cardBorder":"#F3F4F5",
     
    },
  
    fontFamily:{
      nunito: ["Nunito", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
    },},
  },
  plugins: [],
}