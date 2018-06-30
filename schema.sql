CREATE DATABASE cava;

USE cava;

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL,
  restaurant_id int,
  username varchar(50),
  date date,
  overall_rating smallint,
  food_rating smallint,
  service_rating smallint,
  ambience_rating smallint,
  value_rating smallint,
  noise_level smallint,
  recommended smallint,
  body varchar(1000),
  PRIMARY KEY (restaurant_id, id)
);

\COPY reviews(restaurant_id,username,date,overall_rating,food_rating,service_rating,ambience_rating,value_rating,noise_level,recommended,body) FROM 'reviews.csv' DELIMITER ',' CSV HEADER;

