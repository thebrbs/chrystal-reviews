DROP DATABASE IF EXISTS cava;

CREATE DATABASE cava;

USE cava;

CREATE TABLE reviews (
  id int auto_increment,
  restaurant_id int,
  username varchar(50),
  date varchar(50),
  overall_rating int,
  food_rating int,
  service_rating int,
  ambiance_rating int,
  value_rating int,
  noise_level int,
  recommended boolean,
  body varchar (1000),
  PRIMARY KEY (id)
);

CREATE TABLE categories (
  id INT auto_increment,
  category varchar (50),
  selected boolean,
  PRIMARY KEY (id)
);

CREATE TABLE review_categories (
  id INT auto_increment,
  reviews_id int,
  category varchar (50),
  selected boolean,
  PRIMARY KEY (id)
);