module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#CD113B',
      secondary: '#52006A',
      third: '#FF7600',
      fourth: '#FFA900',
      success: '#08a332',
      failed: '#D32626'
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: '#CD113B',
      secondary: '#52006A',
      third: '#FF7600',
      fourth: '#FFA900',
    }),
    ringColor: theme => ({
      ...theme('colors'),
      primary: '#CD113B',
      secondary: '#52006A',
      third: '#FF7600'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
