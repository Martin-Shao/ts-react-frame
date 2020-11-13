import { Compiler } from 'webpack'
import { Express } from 'express'

import historyFallback from 'connect-history-api-fallback'
import cors from 'cors'
import proxyMiddleware from './proxyMiddleware'
import webpackMiddleware from './webpackMiddleware'

export default function setupMiddlewares(server: Express, compiler: Compiler): void {
  proxyMiddleware(server)
  server.use(historyFallback())
  server.use(cors())
  server.use(webpackMiddleware(compiler))
}