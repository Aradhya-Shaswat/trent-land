/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--text)',
        muted: {
           DEFAULT: 'var(--bg-soft)',
           foreground: 'var(--muted)',
        },
        border: 'var(--glass-border)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}