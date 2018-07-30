import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/app.ts",
  output: {
    file: "build/app.js",
    format: "cjs",
    sourcemap: "inline"
  },
  external: ["http", "path", "fs", "module"],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          inlineSources: true
        }
      }
    }),
    nodeResolve(),
    commonjs(),
    uglify()
  ]
};
