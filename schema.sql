DROP DATABASE IF EXISTS cava;

CREATE DATABASE cava;

USE cava;

CREATE TABLE reviews (
  id INT auto_increment,
  review_id int,
  restaurant_id int,
  username varchar(50),
  date date,
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
  review_id int,
  category_id int,
  category varchar (50),
  selected boolean,
  PRIMARY KEY (id)
);