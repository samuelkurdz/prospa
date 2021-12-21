/* eslint-disable no-undef */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}