CREATE DATABASE uniexpress;

USE uniexpress;

CREATE TABLE Users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(32) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Users (name, email, password)
VALUES ('Obi-Wan Kenobi', 'obiwan@jedicouncil.com', md5('skywalker'));
