CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userKey INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(100)
);

CREATE TABLE lobbies (
  lobbyKey SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  lobbyName VARCHAR(100)
);

CREATE TABLE messages (
  messageKey INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255),
  userKey INT NOT NULL,
  INDEX userKey (userKey),
  lobbyKey SMALLINT NOT NULL,
  INDEX lobbyKey (lobbyKey),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userKey)
    REFERENCES users(userKey)
    ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (lobbyKey)
    REFERENCES lobbies(lobbyKey)
    ON DELETE CASCADE ON UPDATE CASCADE
);

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
