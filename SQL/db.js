var mysql = require('mysql');
var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

exports.findAllMessages = function(cb){
  dbConnection.query('SELECT messageKey AS objectID, userName AS username, message AS text, lobbyKey AS roomname FROM messages a INNER JOIN users b ON a.userKey = b.userKey', cb);
};

exports.findUser = function(username, cb){
  dbConnection.query('SELECT userName FROM users WHERE userName = "' + username + '"', cb);
};

exports.saveUser = function(username, cb){
  dbConnection.query('INSERT INTO users (userName) VALUES (' + username + ')', cb);
};

exports.saveMessage = function(message, userid, roomname, cb){
  console.log(message, userid, roomname);
  dbConnection.query('INSERT INTO messages (message, userKey, lobbyKey) SELECT "' + message + '", users.userKey, lobbies.lobbyKey FROM users, lobbies WHERE users.userName = "' + userid + '" AND lobbies.lobbyName = "' + roomname + '"', cb);
};
