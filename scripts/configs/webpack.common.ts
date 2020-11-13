import { Configuration } from 'webpack'

import { projectRoot, projectName, resolvePath } from './env'

const commonConfig: Configuration = {
  context: projectRoot,
  entry: resolvePath(projectRoot, './src/index.tsx'),
  output: {
    publicPath: '/',
    path: resolvePath(projectRoot, './dist'),
    filename: 'js/[name]-[hash].bundle.js',
    hashSalt: projectName || 'ts react frame'
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