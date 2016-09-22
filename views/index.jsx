const React = require('React')
const DefaultLayout = require('./layouts/master')
const CommentBox = require('./CommentBox')



const IndexComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <CommentBox />
        <div>
          <h1>This was built {this.props.name}</h1>
        </div>
      </DefaultLayout>
    )
  }
})

module.exports = IndexComponent
