'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  ENV_CONFIG: '"dev"',
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8090"'
})
