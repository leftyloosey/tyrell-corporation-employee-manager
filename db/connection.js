const mysql = require('mysql2');
// const cTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'bob',
    database: 'tyrell_corp_db'
  },
  console.log(`connected to the Tyrell Corporation Employee database.`)
);




exports.db = db
