import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const sourcemap = !production ? 'inline' : true
const preamble = `/* Version ${pkg.version} */`

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/NexusBridge.js',
      format: 'iife',
      name: 'SiebelAppFacade.NexusBridge',
      sourcemap
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/env',
          {
            modules: 'false',
            corejs: 3,
            targets: {
              browsers: 'ie 11'
            },
            useBuiltIns: 'usage'
          }
        ]
      ]
    }),
    copy({
      targets: [{ src: 'src/index.d.ts', dest: 'dist/types/' }]
    }),
    commonjs(),
    production &&
      terser({
        output: { preamble }
      })
  ]
}
