const initQueries = [
  "CREATE TABLE IF NOT EXISTS Users(id INTEGER PRIMARY KEY AUTOINCREMENT,username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL);",
  "CREATE TABLE IF NOT EXISTS Scores(id INTEGER PRIMARY KEY AUTOINCREMENT,timestamp INTEGER NOT NULL,points INTEGER NOT NULL,user_id INTEGER REFERENCES Users(user_id));",
]

module.exports = initQueries