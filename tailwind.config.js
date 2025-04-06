/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: "hsl(var(--card))",
        // tambahkan yang lain kalau kamu pakai, seperti:
        destructive: "hsl(var(--destructive))",
        accent: "hsl(var(--accent))",
        muted: "hsl(var(--muted))",
        secondary: "hsl(var(--secondary))",
        primary: "hsl(var(--primary))",
        popover: "hsl(var(--popover))",
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
