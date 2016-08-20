'use strict'

require('rootpath')()
const request = require('supertest')
const express = require('express')
const config = require('config')
const { expect } = require('chai')

exports = describe('Misc route /api/misc', function () {
  const { port, ip } = config.environment.server
  const app = express()
  config.express(app)
  config.routes(app)

  let server

  beforeEach(function (done) {
    server = require('http').createServer(app)
    server.listen(port, ip)
    server.on('listening', function () {
      done()
    })
  })

  afterEach(function (done) {
    server.close()
    done()
  })

  describe('GET /api/misc/delimiter', function () {
    it('returns a list of results', function (done) {
      request(server)
      .get('/api/misc/delimiters?property=quotationStart')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err
        expect(res).to.exist
        done()
      })
    })
  })
})
