/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Vastspace warm cream/beige palette
        cream:   '#f5f0e8',   // main background
        sand:    '#ede7d9',   // slightly darker bg
        stone:   '#d6cfc2',   // borders, dividers
        bark:    '#8c7f6e',   // muted text
        earth:   '#3d3530',   // body text
        void:    '#1a1612',   // headings / near-black
        accent:  '#c4601a',   // vastspace orange-rust accent
        warm:    '#e07840',   // lighter orange
        panel:   '#eee8dc',   // card backgrounds
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-left': 'slideLeft 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
