module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#409eff',
        success: '#67c23a',
        info: '#909399',
        warning: '#e6a23c',
        danger: '#f56c6c'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
