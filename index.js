'use strict'

const handleRender = require('./handleRender')
const getHtml = require('./getHtml')

module.exports = app => {
  app.context.redux = {
    handleRender: handleRender,
    getHtml: getHtml
  }
  return app
}
