const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    libraryTarget: 'umd',
    library: '@12luckydev/utils',
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
  },
};
