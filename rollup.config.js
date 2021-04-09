import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const banner = `/**
 * ${pkg.name} v${pkg.version}
 *
 * (c) ${new Date().getFullYear()} ${pkg.author}
 *
 * @author ${pkg.author}
 * @license ${pkg.license}
 */`

export default {
  input: 'src/main.ts', // 入口文件
  output: [
    {
      banner,
      file: `dist/${pkg.version}/lib.esm.js`,
      format: 'esm',
      sourcemap: true,
    },
    {
      banner,
      file: `dist/${pkg.version}/lib.common.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      banner,
      file: `dist/${pkg.version}/lib.umd.js`,
      format: 'umd',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false, // 输出时去除类型文件
        },
      },
    }),
    babel({
      externalHelpers: true,
    }),
    terser(),
  ],
}
