import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import analyzer from "rollup-plugin-analyzer"

export default [
  {
    input: "./src/index.tsx",
    output: {
      dir: "build",
      format: "esm"
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      analyzer({
        summaryOnly: true
      })
    ],
    external: ["react"]
  }
]
