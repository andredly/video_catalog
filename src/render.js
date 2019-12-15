export function renderHtml(content, preloadedState) {
    return `
          <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <title>Title</title>
               ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
                <link rel="icon" href="data:;base64,iVBORw0KGgo=">
              </head>
              <body>
        
              <div id="app">${content}</div>
              <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
    )}
              </script>
              <script src="/js/main.js"></script>
              </body>
              </html>
            `;
}
