const React = require('React')
const DefaultLayout = require('./layouts/master')
const CommentBox = require('./layouts/CommentBox')
const CommentList = require('./layouts/CommentList')
const CommentForm = require('./layouts/CommentForm')



const CommentsComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name} data={this.props.data}>
        <CommentBox data={this.props.data}>
          <CommentList data={this.props.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </CommentBox>

      </DefaultLayout>
    )
  }
})

module.exports = CommentsComponent
