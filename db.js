
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getBurgers (db = connection) {
    return db('burger').select()
}

function getBurgerDetails(id, db = connection) {
    return db('burger')
        .where('id', id)
        .select()
        .first()
}

function addNewBurger(newBurger, db = connection) {
    return db('burger')
    .insert(newBurger)
}


function editBurger(id, db = connection) {
    return db('burger')
        .where('id', id)
        .select()
        .first()
    }


function submitEditedBurger(id, editedBurger, db = connection) {
    return db('burger')
        .where('id', id)
        .update(editedBurger)
        .select()
}

function deleteBurger(id, db = connection) {
    return db('burger')
        .where('id', id)
        .del()
}

module.exports = {
    getBurgers,
    getBurgerDetails,
    addNewBurger,
    editBurger,
    submitEditedBurger,
    deleteBurger
}
  