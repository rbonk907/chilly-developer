/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './mdx-components.tsx',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-lexend)'],
        mono: ['var(--font-chivo-mono)'],
      },
      dropShadow: {
        lgBlue: [
          '0 10px 8px rgba(96, 165, 250, 0.04)',
          '0 4px 3px rgba(96, 165, 250, 0.1)'
        ]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
