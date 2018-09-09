//jshint esversion:6

const express = require('express')
const model = require('../models/header')

module.exports = express.Router()
.get('/', (req, res) => {
  model.getHeaders()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

.post('/', (req, res) => {
  const { command_id, user_id, carburant, type, disponibilite, qualite, prix, date, activity, filler_id } = req.body;
  model.createHeader({ command_id, user_id, carburant, type, disponibilite, qualite, prix, date, activity, filler_id })
  .then(result => res.json(result))
  .catch(err => console.log(err))
})

.put('/:command_id', (req, res) => {
  const { command_id } = req.params;
  const { user_id, carburant, type, disponibilite, qualite, prix, date, activity, filler_id } = req.body;
  model.updateHeader({  command_id, user_id, carburant, type, disponibilite, qualite, prix, date, activity, filler_id })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

.delete('/:command_id', (req, res) => {
  const { command_id } = req.params;
  model.deleteHeader(command_id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
