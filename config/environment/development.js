'use strict'

module.exports = {
  mongo: {
    uri: 'mongodb://localhost/paypalApp-dev'
  },

  server: {
    port: process.env.PORT || 3000
  }
}
