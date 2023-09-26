


const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'driver',
//   password : 'test',
//   database : 'auto_drive',
  
// });
const connection = mysql.createConnection({
  host     : 'j9c104.p.ssafy.io',
  user     : 'root',
  password : '1',
  database : 'auto_drive',
  port : 9876
});


module.exports = connection

