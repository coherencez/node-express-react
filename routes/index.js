'use strict'

const { Router } = require('express')
  ,        route = Router()


route.get('/', (req,res) => {
  res.send('<h1>Live from express, its an h1 tag</h1>')
})


module.exports = route
