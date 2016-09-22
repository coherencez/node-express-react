'use strict'

const { Router } = require('express')
  ,        route = Router()


route.get('/', (req,res) => {
  res.render('index', {name: 'HOOBALSHSOSO'})
})


module.exports = route
