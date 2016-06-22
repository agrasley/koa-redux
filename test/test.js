'use strict'

require('babel-core/register')
require('babel-polyfill')
const React = require('react')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const expect = require('chai').expect
const Provider = require('react-redux').Provider
const handleRender = require('../handleRender')
const getHtml = require('../getHtml')

const componentFn = store => {
  return (
    <Provider store={store}>
      <p>Hello world.</p>
    </Provider>
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const renderObj = handleRender(componentFn, reducer, {text: 'hello world'})

describe('handleRender', () => {
  it('returns an object with the rendered html and state', () => {
    expect(renderObj.state).to.eql({text: 'hello world'})
    expect(renderObj.html).to.contain('Hello world.')
  })
})

describe('getHtml', () => {
  it('returns the formatted html from the rendered object', () => {
    const html = getHtml(renderObj)
    expect(html).to.contain('</p>')
    expect(html).to.contain('<div id="root">')
  })
})
