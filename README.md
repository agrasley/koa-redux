# koa-redux
Serverside rendering in koa made easy

## Installation

```
npm install koa-redux
```

## Usage

Add koa-redux to your koa application's context:

```js
var koa = require('koa')
var koaRedux = require('koa-redux')

var app = koa()
koaRedux(app) // `app = koaRedux(app)` is equivalent
```

Now in your routes/middleware you can access the `redux` property on koa's `this` context.

```js
var myReducer = require('./path/to/my/reducer')
var myComponentFn = require('./path/to/my/componentFn')

app.use(function * (next) {
  var initialState = {text: 'hello world'} // initial state of the redux store
  var renderObj = this.redux.handleRender(componentFn, reducer, initialState)
  var html = this.redux.getHtml(renderObj)
  this.body = `<!doctype html>
  <html>
    <head>
      <title>Redux Example</title>
    </head>
    <body>
      ${html}
      <script src="/static/bundle.js"></script>
    </body>
  </html>`
})
```

## API

The function exported by koa-redux adds a `redux` property to koa's `this` context. The `redux` property is an object containing two functions:

### handleRender

`handleRender` takes three arguments:

1. `componentFn`—A function which takes a redux store as its argument and returns the root react component.
2. `reducer`—The root reducer function for the redux application.
3. `initialState`—The initial state provided to the root reducer. Defaults to `{}` if undefined.

`handleRender` returns an object with two properties:

1. `html`—The rendered html of the react components.
2. `state`—The state used to render the html.

### getHtml

Takes an object returned by `handleRender` and wraps it in an html string that can be used directly when rendering the response body. The object's `html` property is wrapped in a `<div id="root></div>"` tag, while the current state is attached to `window.__INITIAL_STATE__`.
