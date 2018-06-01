DROP DATABASE IF EXISTS cava;

CREATE DATABASE cava;

USE cava;

CREATE TABLE reviews (
  review_id int,
  restaurant_id int,
  username varchar,
  location varchar,
  date date,
  overall_rating int,
  food_rating int,
  service_rating int,
  ambiance_rating int,
  value_rating int,
  noise_level int,
  recommended boolean,
  body varchar
);

CREATE TABLE categories (
  review_id int,
  category_id int,
  category varchar,
  selected boolean
);

CREATE TABLE occasions (
  restaurant_id int,
  occasion_id int,
  occasion varchar,
  selected boolean
);