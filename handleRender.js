'use strict'

const createStore = require('redux').createStore
const renderToString = require('react-dom/server').renderToString

module.exports = (componentFn, reducer, initialState, compArgs) => {
  const store = createStore(reducer, initialState || {})
  const html = renderToString(componentFn(store, compArgs))
  const state = store.getState()
  return {
    html: html,
    state: state
  }
}
