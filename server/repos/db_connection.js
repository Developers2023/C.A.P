var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

const query = (con) => {
  return connection.query(con);
};

async function createUser(email, password){

  query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

}

async function readUser(email, password){

  query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

}

async function deleteUser(email, password){
  
  query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


}
