const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    data = JSON.parse(data)
    let viewInfo = {
      burgers: data
    }
    res.render('burgers', viewInfo)
 })
})

//Renders input form for new burger
router.get('/new', (req, res) => {
  // fs.readFile('./data.json', 'utf-8', (err, data) => {
  // 	data = JSON.parse(data);
      res.render('newBurger')
  })

router.post('/new', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    data = JSON.parse(data)

    const newBurger = {
      "id": data.length + 1 || 0,
      "name": req.body.name,
      "image": req.body.image,
      "restaurant": req.body.restaurant,
      "description": req.body.description,
      "comment": req.body.comment
    }

    data.push(newBurger)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err
      res.redirect('/burger')
    })
  })
})
  

  //Renders details of each individual burger
router.get('/:id', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
		data = JSON.parse(data);
		let burgerID = data.find((burgerID) => burgerID.id == req.params.id);
    res.render('burgerView', burgerID);
	})
})

router.get('/edit/:id', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
		data = JSON.parse(data);
		let burgerID = data.find((burgerID) => burgerID.id == req.params.id);
    res.render('edit', burgerID);
	})
})

router.post('/edit/:id', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
		data = JSON.parse(data);
		let burgerID = data.find((burgerID) => burgerID.id == req.params.id)
  
    burgerID.name = req.body.name
    burgerID.restaurant = req.body.restaurant
    burgerID.description = req.body.description
    burgerID.comment = req.body.comment
     
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err
          res.render('burgerView', burgerID)
      })
  })
})

router.get('/delete/:id', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
		data = JSON.parse(data);
		let burgerId = data.findIndex(burger => burger.id == req.params.id)
    data.splice(burgerId, 1)

    data.forEach((burger, index) => {
       burger.id = index + 1
     })

     fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err
          res.redirect('/burger')
    })
  })
})

module.exports = router