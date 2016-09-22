const React = require('React')
const DefaultLayout = require('./layouts/master')
const AboutInfo = require('./layouts/AboutInfo')
const AboutEmployees = require('./layouts/AboutEmployees')




const AboutComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name} data={this.props.data}>
        <AboutInfo name={this.props.name} />
        <AboutEmployees />
      </DefaultLayout>
    )
  }
})

module.exports = AboutComponent
