//jshint esversion:6
const db = require('./db')

module.exports = {
  getHeaders(){
    return db.query('SELECT * FROM headers ORDER BY id')
  },
  createHeader({ carburant, type, disponibilite, qualite, prix }){
    return db.query(`
      INSERT INTO headers (carburant, type, disponibilite, qualite, prix)
      VALUES ('${carburant}','${type}', '${disponibilite}','${qualite}', '${prix}')`)
  },
  updateHeader({ id, carburant, type, disponibilite, qualite, prix }) {
  return db.query(`UPDATE headers SET carburant='${carburant}', type='${type}',
  disponibilite='${disponibilite}', qualite='${qualite}', prix ='${prix}' WHERE id='${id}' `)
},
deleteHeader(id) {
  return db.query(`DELETE FROM headers WHERE id=${id} `)
}
}
