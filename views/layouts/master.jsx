const React = require('React')


const DefaultLayout = React.creatClass({
  render: () => {
    return (
      <html lang='en'>
        <head>
          <title>{this.props.name}</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
})

module.exports = DefaultLayout
