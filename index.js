//jshint esversion:6

console.log("index2.js bis");

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  req.body = Object.entries(req.body).reduce(( acc, [key, value] ) => {
    acc[key] = (typeof value === 'string') ? value.replace(/\'/g, '\'\'') : value
    return acc
  }, {})
  next();
})
////////////// DO NOT USE //////////////////
// app.all('/*', (req, res, ) => {
//   res.status(404).send('pas de connexion')
// })

////////// Global Connection ///////////
app.get('/', (req,res) => {
  res.send('Effectuated')
})

//////////// back end //////////////
app.use('/users', require('./controllers/user.js'))
app.use('/fillers', require('./controllers/filler.js'))
app.use('/command', require('./controllers/command.js'))


const port = process.env.PORT || 3005

app.listen(port, () => {
  console.log(`Connected server on port ${port} ( http://localhost:${port} )`)
})
.on('error', err => console.log('erreur de connexion : ', err))
