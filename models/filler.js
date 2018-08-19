const db = require('./db')

module.exports = {
  getFillers() {
    return db.query('SELECT * FROM fillers ORDER BY id')
  },
  createFiller({ firstname, lastname }) {
    return db.query(`
    INSERT INTO fillers (firstname, lastname)
    VALUES ('${firstname}', '${lastname}')`)
  },
  updateFiller({ id, firstname, lastname }) {
    return db.query(`
    UPDATE fillers
    SET firstname='${firstname}', lastname='${lastname}'
    WHERE id=${id}`)
  },
  deleteFiller(id) {
    return db.query(`DELETE FROM fillers WHERE id=${id}`)
  }
}
