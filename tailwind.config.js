/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {},
  },
  safelist: [
    "bg-yellow-200",
    "bg-green-200",
    "bg-red-200",
    "bg-amber-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-indigo-200",
    "bg-emerald-200",
    "bg-cyan-100",
    "bg-fuchsia-200",
    "bg-violet-200",
    "bg-rose-200",
    "bg-lime-200",
  ],
  plugins: [],
};
