//jshint esversion:6
const db = require('./db')

module.exports = {
  getHeaders(){
    return db.query('SELECT * FROM headers')
  },
  createHeader({ command_id, user_id, carburant, type, disponibilite, qualite, prix, date, activity, filler_id }){
    return db.query(`
      INSERT INTO headers (command_id, user_id, carburant, type,
      disponibilite, qualite, prix, date, activity, filler_id) VALUES (
        '${command_id}','${user_id}',
      '${carburant}','${type}', '${disponibilite}','${qualite}',
      '${prix}','${date}','${activity}', '${filler_id}' )`)
  },
  updateHeader({ command_id, user_id, carburant, type, disponibilite, qualite, prix, date, activity, filler_id }) {
  return db.query(`UPDATE headers SET user_id='${user_id}', carburant='${carburant}', type='${type}',
  disponibilite='${disponibilite}', qualite='${qualite}', prix ='${prix}',
  date ='${date}', activity ='${activity}', filler_id ='${filler_id}' WHERE command_id='${command_id}' `)
},
deleteHeader(command_id) {
  return db.query(`DELETE FROM headers WHERE command_id=${command_id} `)
}
}
