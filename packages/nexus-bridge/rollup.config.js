import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'iife', name: 'NexusBridge' },
    { file: pkg.module, format: 'esm' }
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
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
