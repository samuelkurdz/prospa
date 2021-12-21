/* eslint-disable no-undef */
const tailwindcss = require('tailwindcss');

mix.sass('resources/assets/sass/app.scss', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('./tailwind.config.js') ],
   });