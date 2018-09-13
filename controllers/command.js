const express = require('express')
const model = require('../models/command')

module.exports = express.Router()
.get('/',(req, res) => {
  model.getCommands()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.get('/:user_id',(req,res) => {
  const { user_id } = req.params;
  model.getCommandByUserId(user_id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

.post('/', (req,res) => {
  const { user_id, filler_id, carburant, type, disponibilite, qualite, prix, date, activity } = req.body;
  model.createCommand({ user_id, filler_id, carburant, type, disponibilite, qualite, prix, date, activity })
  .then(result => res.json(result))
  .catch(err =>res.json(err))
})

.put('/:id', (req,res) => {
  const { id } = req.params;
  const { user_id, filler_id, carburant, type, disponibilite, qualite, prix, date, activity } = req.body;
  model.updateCommand({ id, user_id, filler_id, carburant, type, disponibilite, qualite, prix, date, activity })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

.delete('/:id', (req,res) => {
  const { id } = req.params;
  model.deleteCommand(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
