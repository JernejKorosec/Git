
//import {myExport} from '/modules/my-module.js';
//import {Author} from './Classes/mycrud.js';
// import Author from './Classes/mycrud.js';

var authors = require("./Classes/person");



// ========================================================================
const mysql = require('mysql');
// ========================================================================
const con = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'sitepoint'
});
// ======================================================================== 
con.connect((err) => {
  if (err) throw err;
  console.log('Connected!!');
});
// ========================================================================
con.query('SELECT * FROM authors', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
  rows.forEach( (row) => {
    console.log(`${row.name} lives in ${row.city}`);
  });

});
// ========================================================================


/*
var author = new Author("test","Joe");

con.query('INSERT INTO authors SET ?', author, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});
*/
// ========================================================================
//const author = { name: 'Craig Buckler', city: 'Exmouth' };
// ========================================================================
/*
con.query('INSERT INTO authors SET ?', author, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});
*/
// ========================================================================