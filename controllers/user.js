// jshint esversion:6
// http://localhost:3005/users/

const express = require('express')
const model = require('../models/user')

module.exports = express.Router()
  .get('/', (req, res) => {
    model.getUsers()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
  .post('/', (req, res) => {
    const { lastname, firstname } = req.body;
    model.createUser({ firstname, lastname })
      .then(result => res.send(result))
      .catch(err => console.log(err))
  })
  /**
   * Move a card
   */
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    model.updateUser({ id, firstname, lastname })
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })

  .delete('/:id', (req, res) => {
    const { id } = req.params;
    model.deleteUser(id)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
.get('/:id',(req, res) => {
  const { id } = req.params;
  model.getUserById(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
