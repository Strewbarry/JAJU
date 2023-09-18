


const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'driver',
  password : 'test',
  database : 'auto_drive'
});


module.exports = connection

