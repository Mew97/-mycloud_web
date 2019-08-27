'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API:'"http://localhost:8080/api/"',
  VUE_APP_UPLOAD:'"http://localhost:8080/api/chunk"'
})
