-- This file is modeled after activity 5 in module 12
DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

SELECT DATABASE();

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);