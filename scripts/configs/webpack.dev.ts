import { resolve } from 'path'
import { merge } from 'webpack-merge'
import { HotModuleReplacementPlugin } from 'webpack'
import ForkTsCheckWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import commonConfig from './webpack.common'
import { PROJECT_ROOT } from '../helpers/constants'

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new ForkTsCheckWebpackPlugin({
      typescript: {
        memoryLimit: 2014,
        configFile: resolve(PROJECT_ROOT)
      },
    }),
    new HotModuleReplacementPlugin(),
  ]
})

export default devConfig