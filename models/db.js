// jshit esversion:6


// login as such http://192.168.99.100:8089/ SOIT http://192.168.99.100:8089/
const { Client } = require('pg');
const db = new Client({
  connectionString :'postgres://test:test100@192.168.99.100:5439/testdb'
});

db.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log('DB CONNECTION OK');
});

db.unwrapQuery = (sql) =>{
  return db.query(sql)
  .then( results => results.rows )
  .catch( err => Promise.reject(err) );
};

module.exports = db;
