/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-black': '#08111A',
        'rich-black-2': '#010610',
        'raisin-black': '#1D2127',
        'reseda-green': '#887C56',
        'ecru': '#D3C687'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.5s both',
        'fade-in-delay-2': 'fadeIn 1s ease-out 1s both',
        'water-ripple': 'waterRipple 3s ease-in-out infinite',
        'water-shimmer': 'waterShimmer 4s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        waterRipple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        waterShimmer: {
          '0%': { opacity: '0.3', transform: 'translateX(-100%)' },
          '100%': { opacity: '0.7', transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
};