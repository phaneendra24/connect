/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('/img/footer-texture.png')",
        lockbg: "url('Lsbg.jpg')",
      },
    },
  },
  plugins: [],
};
