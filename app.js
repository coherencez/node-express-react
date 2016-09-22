'use strict'

const express = require('express')
  ,      path = require('path')
  ,       app = express()
  ,      port = process.env.PORT || 3000
  ,    routes = require('./routes/index')


app.set('port', port)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(routes)
app.use(express.static(path.join(__dirname)))

app.listen(port, () => {
  console.log(`Now listeing one ${port}`)
})
