DROP SCHEMA IF EXISTS test;
CREATE SCHEMA test;
USE test;

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    id INT,
    name VARCHAR(40)
);

INSERT INTO users (id, name) VALUES (1, "Alice");
INSERT INTO users (id, name) VALUES (2, "Bob");
