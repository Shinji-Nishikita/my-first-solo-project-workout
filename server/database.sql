CREATE DATABASE workoutdata;

CREATE TABLE mydata(
    place_id SERIAL PRIMARY KEY,
    name text,
    age int,
    weight int,
    height int,
    gender varchar(1),
    date date
);