CREATE KEYSPACE cava
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor' : 1
};

USE cava;

CREATE TABLE reviews (
  id int,
  restaurant_id int,
  username text,
  date date,
  overall_rating tinyint,
  food_rating tinyint,
  service_rating tinyint,
  ambience_rating tinyint,
  value_rating tinyint,
  noise_level tinyint,
  recommended tinyint,
  body text,
  PRIMARY KEY((restaurant_id), id)
);

COPY cava.reviews (id,restaurant_id,username,date,overall_rating,food_rating,service_rating,ambience_rating,value_rating,noise_level,recommended,body) FROM '~/Desktop/hr/reviews-cam/database/reviews.csv' WITH HEADER=true AND DELIMITER = ',';