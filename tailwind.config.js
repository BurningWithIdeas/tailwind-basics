module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      main: '#ffffff',
      secondary: '#ffb600',
      additional: '#23282d',
      supplemental: '#ebebeb',
    },
    fontFamily: {
      raleway: ['raleway'],
    },
    container: (theme) => ({
      center: true,

      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
      },
    }),
    extend: {
      maxWidth: {
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
      },
    },
  },
  plugins: [],
};
