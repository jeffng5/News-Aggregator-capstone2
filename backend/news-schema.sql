CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password TEXT NOT NULL,
    email TEXT NOT NULL 
    CHECK (position('@' IN email) > 1));

CREATE TABLE archives (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    author TEXT

);

CREATE TABLE preferences (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    preferences TEXT NOT NULL
)