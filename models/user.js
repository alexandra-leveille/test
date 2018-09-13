// jshint esversion:6
const db = require('./db')

module.exports = {
  getUsers() {
    return db.query('SELECT * FROM users ORDER BY id')
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
getUserById(id){
  return db.query(`SELECT * FROM users WHERE id=${id}`)
}
}
