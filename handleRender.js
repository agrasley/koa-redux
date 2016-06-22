'use strict'

const createStore = require('redux').createStore
const renderToString = require('react-dom/server').renderToString

module.exports = (componentFn, reducer, initialState) => {
  const store = createStore(reducer, initialState || {})
  const html = renderToString(componentFn(store))
  const state = store.getState()
  return {
    html: html,
    state: state
  }
}
