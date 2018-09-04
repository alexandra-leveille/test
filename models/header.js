//jshint esversion:6
const db = require('./db')

module.exports = {
  getHeaders(){
    return db.query('SELECT * FROM headers')
  },
  createHeader({ command_id, user_id, carburant, type, disponibilite, qualite, prix, date, activity }){
    return db.query(`
      INSERT INTO headers (command_id, user_id, carburant, type,
      disponibilite, qualite, prix, date, activity) VALUES (
        '${command_id}','${user_id}',
      '${carburant}','${type}', '${disponibilite}','${qualite}',
      '${prix}','${date}','${activity}' )`)
  },
  updateHeader({ command_id, user_id, carburant, type, disponibilite, qualite, prix, date, activity }) {
  return db.query(`UPDATE headers SET user_id='${user_id}', carburant='${carburant}', type='${type}',
  disponibilite='${disponibilite}', qualite='${qualite}', prix ='${prix}',
  date ='${date}', activity ='${activity}' WHERE command_id='${command_id}' `)
},
deleteHeader(command_id) {
  return db.query(`DELETE FROM headers WHERE command_id=${command_id} `)
}
}
