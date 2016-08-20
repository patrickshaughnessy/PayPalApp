'use strict'

const debug = require('debug')('PayPalApp: server')
const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const setup = require('./middlewares/frontendMiddleware')
const resolve = require('path').resolve

debug('booting up')

const { uri, options } = config.environment.mongo
mongoose.connect(uri, options, (err) => {
  if (err) throw err
  debug(`connected to MONGODB at ${uri}`)
})

const app = express()
config.express(app)
config.routes(app)

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
})

const server = require('http').createServer(app)
const { port, ip } = config.environment.server
server.listen(port, ip)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'PORT ' + addr.port
  debug('listening on ' + bind)
}

module.exports = app
