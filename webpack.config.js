const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const ESLintPlugin = require('eslint-webpack-plugin');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './index.ts',
  mode: NODE_ENV,
  target: 'node',
  watch: NODE_ENV === 'development',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@routes': path.resolve(__dirname, 'routes/'),
      '@utils': path.resolve(__dirname, 'utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ],
      },
    ],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: ['yarn run:dev'],
      },
    }),
    new ESLintPlugin(),
  ],
};
