'use strict'

module.exports = renderObj => {
  return `<div id="root">${renderObj.html}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(renderObj.state)}
          </script>`
}
