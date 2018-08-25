const express = require('express')
const model = require('../models/header')

module.exports = express.Router()
.get('/', (req, res) => {
  model.getHeaders()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

.post('/', (req, res) => {
  const { carburant, type, disponibilite, qualite, prix } = req.body;
  model.createHeader({ carburant, type, disponibilite, qualite, prix })
  .then(result => res.json(result))
  .catch(err => console.log(err))
})

.put('/:id', (req, res) => {
  const { id } = req.params;
  const { carburant, type, disponibilite, qualite, prix } = req.body;
  model.updateHeader({ id, carburant, type, disponibilite, qualite, prix })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

.delete('/:id', (req, res) => {
  const { id } = req.params;
  model.deleteHeader(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
