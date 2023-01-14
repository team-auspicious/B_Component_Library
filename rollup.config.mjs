import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import jsonPlugin from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
const extensions = [".js", ".jsx", ".ts", ".tsx"]; // 어떤 확장자를 처리 할 지 정함

export default {
  input: "./src/index.js",

  output: [
    {
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    url(),
      svgr(),
    jsonPlugin(),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      babelHelpers: "runtime",
      presets: [
        "@babel/env",
        ["@babel/react", { runtime: "automatic" }],
      ],
      plugins: ["@babel/plugin-transform-runtime"],
      extensions,
    }),
  ],
};
