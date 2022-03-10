import { defineConfig } from 'tsup'
const baseConfig: object = {
  /**
      * Output different formats to different folder instead of using different extensions
      */
  legacyOutput: true,
  format: [
    `cjs`,
    `esm`,
  ],
  minify: false,
  outDir: `dist`,
  sourcemap: false,
  /** Don't bundle these modules */
  external: [
    `react`,
    `react-dom`
  ],
  loader: {
    '.md': `file`,
    '.css': `css`,
  },
  /**
      * Code splitting
      * Default to `true`
      * You may want to disable code splitting sometimes: #255
      */
  splitting: true,
  /**
      * Clean output directory before each build
      */
  clean: true,
  /**
      * Suppress non-error logs (excluding "onSuccess" process output)
      */
  silent: false,
  /**
      * Skip node_modules bundling
      */
  skipNodeModulesBundle: false,
  /**
      * Disable bundling, default to true
      */
  bundle: true,
  /**
      * Target platform
      * @default `node`
      */
  platform: `browser`,
  /**
      * Use a custom tsconfig
      */
  tsconfig: `./tsconfig.json`,
  target: `es2015`,
}
export default defineConfig([{
  ...baseConfig,
  name: `build`,
  entry: [
    `src/**/*`,
    `!src/**/*.snap`,
    `!**/*.md`,
    `!src/**/*.test.{js,ts,jsx,tsx}`,
    `test/**/*`,
  ],
  dts: {
    entry: [`src/index.tsx`],
    resolve: true,
  },
}])