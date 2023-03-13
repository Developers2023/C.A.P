var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database:""
});

const query = (con) => {
  return connection.query(con);
};

async function createUser(email, password){
  let sql = '';

  db.get(sql, email, password, function(err, row) {
    if (err) {
        throw err;
    } else {
        console.log(row);
    }
    });

}

async function readUser(email, password){
  let sql = 'SELECT username FROM table WHERE username=?';
}

async function deleteUser(email, password){
  let sql = '';

}
