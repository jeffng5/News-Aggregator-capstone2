CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password TEXT NOT NULL,
    email TEXT NOT NULL 
    CHECK (position('@' IN email) > 1));

CREATE TABLE archives (
    id INTEGER,
    user_id INTEGER REFERENCES users ON DELETE CASCADE,
    url_ TEXT NOT NULL,
    PRIMARY KEY (user_id)

);