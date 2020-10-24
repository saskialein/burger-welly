const express = require('express')
const hbs = require('express-handlebars')

const burgerRouter = require('./routes/burgerRoutes')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))


//ROUTES

//Home route  
server.get('/',(req, res) => {
  res.render('home')
})

server.use('/burger', burgerRouter)


module.exports = server
