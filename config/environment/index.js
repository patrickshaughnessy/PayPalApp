'use strict'

const merge = require('lodash.merge')
const debug = require('debug')('PayPalApp: config')

const envs = ['development', 'production', 'test']
if (!process.env.NODE_ENV || envs.indexOf(process.env.NODE_ENV) === -1) {
  const err = new Error(`NODE_ENV must be set to one of ${envs.join(' | ')} !`)
  throw err
}

debug('Configuring for NODE_ENV=%s', process.env.NODE_ENV)

const base = {
  server: {
    port: process.env.PORT || 8080,
    ip: process.env.IP
  },

  env: process.env.NODE_ENV
}

let extendedOptions

switch (process.env.NODE_ENV) {
  case 'development':
    extendedOptions = require('./development')
    break
  case 'production':
    extendedOptions = require('./production')
    break
  case 'test':
    extendedOptions = require('./test')
    break
}

const config = merge(base, extendedOptions)

module.exports = config
