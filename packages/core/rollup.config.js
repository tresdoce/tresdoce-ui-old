import external  from 'rollup-plugin-peer-deps-external';
import autoExternal from 'rollup-plugin-auto-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-import-css';
import { babel } from '@rollup/plugin-babel';

import typescript from 'rollup-plugin-typescript2';
const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['styled-components',
    'react',
    'react-dom'],
  plugins: [
    external (),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({ babelHelpers: 'bundled' }),
    image(),
    json(),
    terser(),
    css(),
    autoExternal({
      builtins: false,
      dependencies: true,
      peerDependencies: true,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
