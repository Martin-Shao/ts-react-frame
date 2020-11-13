import chalk from 'chalk'
import getPort from 'get-port'
import logSymbols from 'log-symbols'

import express from 'express'
import webpack from 'webpack'
import WebpackOpenBrowser from 'webpack-open-browser'

import setupMiddlewares from './middlewares'
import devConfig from './configs/webpack.dev'
import { HOST, DEFAULT_PORT, ENABLE_OPEN } from './helpers/constants'


async function start() {
  const PORT = await getPort({ port: [DEFAULT_PORT, 4000, 8080, 8888] })
  const address = `http://${HOST}:${PORT}`

  if (ENABLE_OPEN) {
    let openAddress = ENABLE_OPEN as string
    if (ENABLE_OPEN === true) {
      openAddress = address
      let publicPath = devConfig.output?.publicPath
      publicPath = publicPath === null || publicPath === '' ? '/' : publicPath;
      if (publicPath !== '/') {
        openAddress = `${address}${(publicPath as string).startsWith('/') ? '' : '/'}${publicPath}${(publicPath as string).endsWith('/') ? '' : '/'}index.html`;
      }
    }
    devConfig.plugins!.push(new WebpackOpenBrowser({ url: openAddress }))
  }

  const devServer = express()
  const compiler = webpack(devConfig)
  setupMiddlewares(devServer, compiler)

  const httpServer = devServer.listen(PORT, HOST, () => {
    console.info(`DevServer is running at ${chalk.magenta.underline(address)} ${logSymbols.success}`)
  })

  const SIGNAL = ['SIGINT', 'SIGTERM']
  SIGNAL.forEach((signal: any) => {
    process.on(signal, () => {
      httpServer.close()
      console.info(chalk.greenBright.bold(`\n${Math.random() > 0.5 ? 'See you again' : 'Goodbye'}!`))
    })
    process.exit()
  });
}

if (require.main === module) {
  start()
}