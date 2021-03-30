import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        image(),
        json(),
        terser(),
        css(),
        typescript({useTsconfigDeclarationDir: true})
    ]
};
