const React = require('React')
const DefaultLayout = require('./layouts/master')
const CommentBox = require('./CommentBox')
const CommentList = require('./CommentList')
const CommentForm = require('./CommentForm')



const CommentsComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <CommentBox >
          <CommentList data={this.props.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </CommentBox>

      </DefaultLayout>
    )
  }
})

module.exports = CommentsComponent
