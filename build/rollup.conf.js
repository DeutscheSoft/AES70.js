import { terser } from 'rollup-plugin-terser';

export default {
  input: '../src/bundle.browser.js',
  output: {
    format: 'iife',
    file: '../dist/AES70.es5.js',
    plugins: [terser()],
  },
};
