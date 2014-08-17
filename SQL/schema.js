var Sequelize = require("sequelize");
var sequelize = new Sequelize("chatter", "root", "");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('User', {
  userKey: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  userName: Sequelize.STRING
});

var Lobbies = sequelize.define('Lobbies', {
  lobbyKey: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  lobbyName: Sequelize.STRING
});

var Messages = sequelize.define('Messages', {
  messageKey: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  userKey: Sequelize.INTEGER,
  message: Sequelize.STRING,
  lobbyKey: Sequelize.INTEGER
});

/* .sync() makes Sequelize creaste the database table for us if it doesn't
 *  exist already: */
