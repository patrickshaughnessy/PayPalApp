'use strict'

require('rootpath')()
const debug = require('debug')('PayPalApp: config/routes')
const cors = require('cors')

module.exports = function (app) {
  debug('Setting API routes')
  app.options('*', cors())
  app.use(cors())

  // all public API routes
  app.use('/api/misc', require('routes/api/misc'))
}
