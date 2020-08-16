import { terser } from "rollup-plugin-terser";

export default {
  input: '../src/index.browser.js',
  output: {
    format: 'iife',
    name: 'OCA',
    file: '../dist/AES70.es5.js',
    plugins: [ terser() ],
  }
};
