'use strict'

const { Router } = require('express')
  ,        route = Router()


route.get('/', (req,res) => {
  res.render('index', {name: 'React'})
})

route.get('/comments', (req,res) => {
  res.render('comments', {})
})


module.exports = route
