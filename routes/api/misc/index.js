'use strict'

const express = require('express')
const router = express.Router()

const controller = require('./misc.controller')

router.get('/delimiters', controller.delimeters)

module.exports = router
