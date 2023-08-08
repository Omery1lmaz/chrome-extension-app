module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1E3146',
        primary: '405974',
        darktwo: '#33465B',
        borderColor: '#506783',
        underlineColor: '#263A4F',
        btnPrimary: '#4375F5',
        secondary: '#859BB4',
        btnSecondary: '#304CEF',
      },
    },
  },
  plugins: [],
  variants: {},
  corePlugins: {
    preflight: true,
  },
};
