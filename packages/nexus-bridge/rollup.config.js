import { eslint } from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const banner = `/* Version ${pkg.version} */`;

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      banner,
    },
    {
      file: pkg.main,
      format: 'iife',
      name: 'SiebelAppFacade.NexusBridge',
      sourcemap: true,
      banner,
    }],
  plugins: [
    eslint(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    commonjs(),
    babel({
      exclude: ['node_modules/**', /\/core-js\//],
      externalHelpers: true,
      sourceMaps: true,
    }),
    terser({
      sourcemap: true,
      output: {
        comments: (node, comment) => {
          const text = comment.value;
          return /^\s*Version ([0-9]+)\.([0-9]+)\.([0-9]+)\s*$/.test(text);
        },
      },
    }),
    copy({
      targets: [
        { src: 'src/index.d.ts', dest: 'dist/types/' },
      ],
    }),
  ],
};
