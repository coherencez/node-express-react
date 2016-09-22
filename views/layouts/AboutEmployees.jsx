const React = require('React')

const data = [
        {id: 1, author: "Pete Hunt", text: "Pete is awful"},
        {id: 2, author: "Jordan Walke", text: "Jordan is a real winner and company mascot"}
      ]


const AboutEmployees = React.createClass({
  getInitialState: function() {
    return {key1: data[0], key2: data[1]}
  },
  render: function() {
    return (
      <div className='employeeBox'>
        <div className='employees'>
          <p>{this.state.key1.id}</p>
          <p>{this.state.key1.author}</p>
          <p>{this.state.key1.text}</p>
        </div>
        <div className='employees'>
          <p>{this.state.key2.id}</p>
          <p>{this.state.key2.author}</p>
          <p>{this.state.key2.text}</p>
        </div>
      </div>
    )
  }
})

module.exports = AboutEmployees
