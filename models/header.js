//jshint esversion:6
const db = require('./db')

module.exports = {
  getHeaders(){
    return db.query('SELECT * FROM headers ORDER BY id')
  },
  createHeader({ carburant, type, disponibilite, qualite, prix, date, activity }){
    return db.query(`
      INSERT INTO headers (carburant, type, disponibilite, qualite, prix, date, activity)
      VALUES ('${carburant}','${type}', '${disponibilite}','${qualite}', '${prix}','${date}','${activity}' )`)
  },
  updateHeader({ id, carburant, type, disponibilite, qualite, prix, date, activity }) {
  return db.query(`UPDATE headers SET carburant='${carburant}', type='${type}',
  disponibilite='${disponibilite}', qualite='${qualite}', prix ='${prix}', date ='${date}', activity ='${activity}' WHERE id='${id}' `)
},
deleteHeader(id) {
  return db.query(`DELETE FROM headers WHERE id=${id} `)
}
}
