/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pop': ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'job': "url('/images/jobs.png')",
    },
  },
  plugins: [],
}
}

