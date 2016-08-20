'use strict'

const debug = require('debug')('PayPalApp: config/express')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports = function (app) {
  debug('Setting default express app middleware')

  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use(morgan('dev'))
}
