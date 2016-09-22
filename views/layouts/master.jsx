const React = require('React')


const DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.name}</title>
          <link rel="stylesheet" type="text/css" href="/public/css/main.css" />
        </head>
        <body>
          <nav>
            <ul className='nav'>
              <li> <a href='/'>Home</a> </li>
              <li> <a href='/comments'>Comments</a> </li>
              <li> <a href='/about'>About</a> </li>
            </ul>
          </nav>
          {this.props.children}
        </body>
      </html>
    )
  }
})

module.exports = DefaultLayout
