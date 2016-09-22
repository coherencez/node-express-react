'use strict'

const { Router } = require('express')
  ,        route = Router()


route.get('/', (req,res) => {
  res.render('index', {name: 'React'})
})

route.get('/comments', (req,res) => {
  res.render('comments', {name: 'Comments', data: [
          {id: 1, author: "Pete Hunt", text: "This is one comment"},
          {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
        ]})
})

route.get('/about', (req,res) => {
  res.render('about', {name: 'About'})
})


module.exports = route
