import { resolve } from 'path'
import { Configuration } from 'webpack'

import { __DEV__, PROJECT_ROOT, PROJECT_NAME } from '../helpers/constants'
console.info(PROJECT_ROOT)
const commonConfig: Configuration = {
  context: PROJECT_ROOT,
  entry: resolve(PROJECT_ROOT, './src/index.js'),
  output: {
    publicPath: '/',
    path: resolve(PROJECT_ROOT, './dist'),
    filename: 'js/[name]-[hash].bundle.js',
    hashSalt: PROJECT_NAME || 'ts react frame'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(tsx|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
      }
    ]
  }
}

export default commonConfig