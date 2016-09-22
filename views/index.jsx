const React = require('React')
const DefaultLayout = require('./layouts/master')


const IndexComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <div>
          <h1>This was built using {this.props.name}</h1>
        </div>
      </DefaultLayout>
    )
  }
})

module.exports = IndexComponent
