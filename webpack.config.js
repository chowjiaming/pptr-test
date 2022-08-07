const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  target: 'web',
  devServer: {
    port: '9500',
    static: ['./public'],
    open: false,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
};
