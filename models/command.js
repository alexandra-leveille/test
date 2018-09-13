// jshint esversion:6
const db = require('./db')

module.exports = {

  getCommands() {
    return db.query('SELECT * FROM command ORDER BY id')
  },
createCommand({ user_id, filler_id, carburant, type, disponibilite, qualite, prix, date, activity }) {
  return db.query(` INSERT INTO command (user_id, filler_id, carburant, type, disponibilite, qualite, prix, date, activity)
  VALUES ('${user_id}','${filler_id}','${carburant}','${type}','${disponibilite}','${qualite}','${prix}','${date}','${activity}')`)
},
  updateCommand({ id, user_id, filler_id, carburant, type, disponibilite, qualite, prix, date, activity}) {
    return db.query(`
    UPDATE command
    SET user_id='${user_id}', filler_id='${filler_id}', carburant='${carburant}', type='${type}', disponibilite='${disponibilite}', qualite='${qualite}', prix='${prix}',
    activity='${activity}', date='${date}'
    WHERE id=${id}`)
  },
  deleteCommand(id) {
    return db.query(`DELETE FROM command WHERE id=${id}`)
  },
  getCommandByUserId(user_id){
    return db.query(`SELECT * FROM command WHERE user_id=${user_id}`)
  }
}
