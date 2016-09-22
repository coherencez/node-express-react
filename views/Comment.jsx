const React = require('react')

const Comment = React.createClass({

  render: function() {
    return(
      <div className="comment">
       <h2 className="commentAuthor">
         {this.props.author}
       </h2>
       {this.props.text}
     </div>
    );
  }
})

module.exports = Comment

// rawMarkup: function() {
//  var md = new Remarkable();
//  var rawMarkup = md.render(this.props.children.toString());
//  return { __html: rawMarkup };
// },
// <span dangerouslySetInnerHTML={this.rawMarkup()} />
