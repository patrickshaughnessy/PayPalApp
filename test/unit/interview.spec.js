'use strict'

require('rootpath')()
const request = require('supertest')
const express = require('express')
const config = require('config')
// const { expect } = require('chai')

exports = describe('Interview route /api/misc', function () {
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

  describe('GET /api/interviews', function () {
    it('returns all interviews', function (done) {
      console.log('requesting server')
      done()
      request(server)
      .get('/api/interviews')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err
        // expect res to have interviews
        done()
      })
    })
  })

  describe('POST /api/interviews', function () {
    it('creates a new interview', function (done) {
      done()
      // let interviewData = {
      //   name: 'Bob Jones'
      // }
      //
      // request(server)
      // .post('/api/interviews')
      // .send(interviewData)
      // .expect(200)
      // .end(function(err, res) {
      //   if (err) throw err
      //   // let { interview } = res.body
      //   // expect(interview).to.exist
      //   done()
      // })
    })
  })

  describe('PUT /api/interviews', function () {
    it('edits an existing interview', function (done) {
      done()
      // let interviewData = {
      //   name: 'Bob Jones'
      // }
      //
      // request(server)
      // .put('/api/interviews')
      // .send(interviewData)
      // .expect(200)
      // .end(function(err, res) {
      //   if (err) throw err
      //   // let { interview } = res.body
      //   // expect(interview).to.exist
      //   done()
      // })
    })
  })

  describe('DELETE /api/interviews/:id', function () {
    it('deletes an interview', function (done) {
      done()
      // let interviewData = {
      //   name: 'Bob Jones'
      // }
      //
      // request(server)
      // .put('/api/interviews')
      // .send(interviewData)
      // .expect(200)
      // .end(function(err, res) {
      //   if (err) throw err
      //   // let { interview } = res.body
      //   // expect(interview).to.exist
      //   done()
      // })
    })
  })
})
