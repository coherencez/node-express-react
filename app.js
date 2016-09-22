'use strict'
// third party modules
const express = require('express')

// app modules and vars
  ,      path = require('path')
  ,       app = express()
  ,      port = process.env.PORT || 3000
  ,    routes = require('./routes/index')

// server config
app.set('port', port)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(routes)
app.use(express.static(path.join(__dirname)))

/**  TODO:  Error Handling **/

// initiate sever on designated port
app.listen(port, () => {
  console.log(`Now listening one ${port}`)
})
