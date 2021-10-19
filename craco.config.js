const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const CracoAntDesignPlugin = require("craco-antd");
const path = require(`path`);
const alias = require("./src/config/aliases/aliases");

const SRC = `./src`;
const aliases = alias(SRC);

// Don't open the browser during development
process.env.BROWSER = "none";

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "src/styles/antd/theme.less"
        ),
      },
    },
  ],
};
