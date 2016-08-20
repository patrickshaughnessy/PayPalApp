'use strict'

require('rootpath')()
const fs = require('fs')
const path = require('path')
const async = require('async')
const languages = require('./languages.json')
const countries = require('./countries.json')

const getCountry = (locale) => {
  let countryCode = locale.split('-')[1]

  let country
  if (countries.alpha2[countryCode]) {
    country = countries.alpha2[countryCode]
  } else if (countries.alpha3[countryCode]) {
    country = countries.alpha3[countryCode]
  } else {
    country = 'not specified'
  }
  return country
}

const findDelimiters = (delimiter, cb) => {
  const cldrPath = 'node_modules/cldr-misc-full/main'
  fs.readdir(cldrPath, (err, locales) => {
    if (err) return cb(err)
    async.reduce(
      locales,
      [],
      function (delimiters, locale, done) {
        fs.readdir(path.join(cldrPath, locale), (err, files) => {
          if (err) return done(err, delimiters)
          const index = files.indexOf('delimiters.json')
          if (index >= 0) {
            const file = require(path.join(cldrPath, locale, 'delimiters.json'))
            const result = file.main[locale].delimiters[delimiter]
            if (result) {
              const language = languages[locale.slice(0, 2)] || 'unknown'
              const country = getCountry(locale)

              delimiters.push({
                delimiter: result,
                locale,
                language,
                country
              })
            }
          }
          done(err, delimiters)
        })
      },
      function (err, contents) {
        cb(err, contents)
      }
    )
  })
}

exports.delimeters = (req, res) => {
  findDelimiters(req.query.property, (err, results) => {
    return res.status(err ? 400 : 200).send(err || { results })
  })
}
