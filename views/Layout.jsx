const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        {/* normalize.css removes cross-browser differences in defaults, e.g.,
        differences in how form elements appear between Firefox and IE
        See: http://necolas.github.com/normalize.css/ */}
        <link rel="stylesheet" href="/stylesheets/normalize.css" />

        {/* your CSS styles */}
        <link rel="stylesheet" href="/stylesheets/application.css" />

        {/* your client JavaScript code */}

        <title>{title}</title>
      </head>
      <body>
        {children}
        <script src="/js/application.js" />
      </body>

    </html>
  );
};
