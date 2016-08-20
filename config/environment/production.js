'use strict'

module.exports = {
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/paypalApp-prod'
  },

  server: {
    port: process.env.PORT || 8080
  }
}
