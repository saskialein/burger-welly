const express = require('express')
const fs = require('fs')

const db = require('../db')
const router = express.Router()
//Burger overview
router.get('/', (req, res) => {
  db.getBurgers()
    .then(burgers => {
      return res.render('burgers', {burgers: burgers})
    })
    .catch(err => {
    res.status(500).send ('DATABASE ERROR: ' + err.messsage)
  })
 })

//input form route to add new burger
router.get('/new', (req, res) => {
      res.render('newBurger')
  })

//form post route
router.post('/new', (req, res) => {
 
    const newBurger = {
      "name": req.body.name,
      "image_url": req.body.image_url,
      "restaurant": req.body.restaurant,
      "description": req.body.description,
      "comment": req.body.comment
    }
  db.addNewBurger(newBurger)
    .then(() => {
      res.redirect('/burger')  
  })
    })
  

//burger details route
router.get('/:id', (req, res) => {
  db.getBurgerDetails(req.params.id)
  .then(burgers => {
    res.render('burgerView', burgers);
	})
})

//edit burger route
router.get('/edit/:id', (req, res) => {
  db.editBurger(req.params.id)
    .then(burger => {
      res.render('edit', burger);   
  })
	})

// post edited burger route
router.post('/edit/:id', (req, res) => {
  let editedBurger = 
  {
    "name": req.body.name,
    "restaurant": req.body.restaurant,
    "description": req.body.description,
    "comment": req.body.comment
  }
  db.submitEditedBurger(req.params.id, editedBurger)
    .then(()=> {
      res.redirect('/burger/' + req.params.id)
  })
      })

//delete
router.get('/delete/:id', (req, res) => {
  db.deleteBurger(req.params.id)
    .then(() => {
      res.redirect('/burger')
  })
    })

module.exports = router