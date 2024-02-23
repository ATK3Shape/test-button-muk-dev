import resolve from '@rollup/plugin-node-resolve' // to resolve external modules (from node_modules folder)
import commonjs from '@rollup/plugin-commonjs' // converts CommonJS to ES2015 before Rollup can process them
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

//NEW
import terser from '@rollup/plugin-terser' // for minification
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      typescript(),
      peerDepsExternal(),

      resolve(),
      commonjs(), // usually goes before other plug-ins

      // NEW
      terser(),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.css$/], // this will NOT be bundled with the library    
  },
]