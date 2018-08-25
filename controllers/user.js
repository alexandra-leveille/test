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
  .get('/display', (req,res) => {
    model.getIdUserCommandName()
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })
  .get('/display/:id',(req,res) => {
  const { id } = req.params;
  model.getIdUserCommandNameById(id)
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
///////////////////////// getIdUserCommandName2 //////////////////////////

.get('/recommand', (req,res) => {
  model.getIdUserCommandName2()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.get('/recommand/:user_id',(req,res) => {
const { user_id } = req.params;
model.getIdUserCommandName2ById(user_id)
.then(result => res.json(result))
.catch(err => res.json(err))
})
.post('/recommand', (req, res) => {
  const { user_id, user_name, command } = req.body;
  model.createUserCommandName2({ user_id, user_name, command })
    .then(result => res.send(result))
    .catch(err => console.log(err))
})
.put('/recommand/:user_id', (req, res) => {
  const { user_id } = req.params;
  const { user_name, command } = req.body;
  model.updateUserCommandName2({ user_id, user_name, command })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
.delete('/recommand/:user_id',(req, res) => {
  const { user_id } = req.params;
  model.deleteUserCommandName2(user_id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
