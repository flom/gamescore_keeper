CREATE TABLE Group
(
    id TEXT PRIMARY KEY
)

CREATE TABLE Player
(
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    initials TEXT NOT NULL,
    color TEXT NOT NULL,

    groupId TEXT NOT NULL,
    FOREIGN KEY (groupId) references Group (id)
)

CREATE TABLE Game
(
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,

    groupId TEXT NOT NULL,
    FOREIGN KEY (groupId) references Group (id)
)

CREATE TABLE GameRecord
(
    id TEXT PRIMARY KEY,
    dateTime TEXT NOT NULL,
    notes TEXT NOT NULL,

    gameId TEXT NOT NULL,
    FOREIGN KEY (gameId) references Game (id)
)

CREATE TABLE GameScore
(
    id TEXT PRIMARY KEY,
    score REAL NOT NULL,

    playerId TEXT NOT NULL,
    FOREIGN KEY (playerId) references Player (id),

    gameRecordId TEXT NOT NULL,
    FOREIGN KEY (gameRecordId) references GameRecord (id),
)