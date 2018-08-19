// jshint esversion:6
const db = require('./db')

module.exports = {

  getUsers() {
    return db.query('SELECT * FROM users ORDER BY id')
  },
getIdUserCommandName(){
  return db.query(`
    SELECT users.id,
   CONCAT(users.lastname,' ', users.firstname) as name,
   json_agg(json_build_object('id', users_command.command_id, 'name', command.name)) as command
   FROM users
   JOIN users_command ON users.id = users_command.user_id
   JOIN command ON command.id = users_command.command_id
   GROUP BY users.id
    `)
},
getIdUserCommandNameById(id) {
return db.query(`
  SELECT users.id,
  CONCAT(users.lastname,' ', users.firstname) as name,
  json_agg(json_build_object('id', users_command.command_id, 'name', command.name)) as command
  FROM users
  JOIN users_command ON users.id = users_command.user_id
  JOIN command ON command.id = users_command.command_id
  WHERE users.id=${id}
    GROUP BY users.id `)
},
  createUser({ firstname, lastname }) {
    return db.query(`
    INSERT INTO users (firstname, lastname)
    VALUES ('${firstname}', '${lastname}')`)
  },
  updateUser({ id, firstname, lastname }) {
    return db.query(`
    UPDATE users
    SET firstname='${firstname}', lastname='${lastname}'
    WHERE id=${id}`)
  },
  deleteUser(id) {
    return db.query(`DELETE FROM users WHERE id=${id}`)
  },
  getIdUserCommandName2(){
    return db.query('SELECT * FROM display2_command')
  },
getIdUserCommandName2ById(user_id){
  return db.query(`SELECT * FROM display2_command WHERE user_id=${user_id}`)
},
  createUserCommandName2({ user_id,user_name, command }) {
    return db.query(`
    INSERT INTO display2_command (user_id, user_name, command)
    VALUES ('${user_id}', '${user_name}', '${command}')`)
  },
updateUserCommandName2({ user_id,user_name, command }){
  return db.query(`
    UPDATE display2_command
    SET user_name='${user_name}', command='${command}'
    WHERE user_id=${user_id}
    `)
},
deleteUserCommandName2(user_id) {
  return db.query(`DELETE FROM display2_command WHERE user_id=${user_id}`)
}
}
