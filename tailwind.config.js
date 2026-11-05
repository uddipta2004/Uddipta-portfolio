/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#061711',
          900: '#0A241C',
          800: '#0E2F24', // Primary Deep Forest Green
          750: '#133E30',
          700: '#1A4F3E',
          600: '#236550',
          500: '#2F856A',
        },
        cream: {
          50: '#FAF9F5',
          100: '#F6F4ED', // Warm Sand / Cream Background
          200: '#ECE8DE',
          300: '#DDD8CB',
          400: '#C8C1B0',
        },
        limeAccent: {
          DEFAULT: '#A3E635', // Lime / Mint Accent
          hover: '#84CC16',
          light: '#BEF264',
          subtle: 'rgba(163, 230, 53, 0.15)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 47, 36, 0.05)',
        'card': '0 10px 30px -4px rgba(14, 47, 36, 0.07), 0 4px 12px -2px rgba(14, 47, 36, 0.03)',
        'card-hover': '0 20px 40px -6px rgba(14, 47, 36, 0.12), 0 8px 16px -4px rgba(14, 47, 36, 0.05)',
        'forest-elevated': '0 20px 50px -10px rgba(14, 47, 36, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
