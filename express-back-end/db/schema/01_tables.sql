-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email TEXT,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  avatar_url TEXT
);

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  property_type VARCHAR(255) NOT NULL,
  check_in_time VARCHAR(255) NOT NULL,
  check_out_time VARCHAR(255) NOT NULL,
  price_per_night INTEGER NOT NULL,
  room_size INTEGER NOT NULL,
  meal_plan Boolean default false,
  pampering_session Boolean default false,
  vet_visit Boolean default false,
  daily_hairbrushing Boolean default false,
  for_cat Boolean default false,
  for_dog Boolean default false
  );

DROP TABLE IF EXISTS images CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES properties(id),
  avatar_url TEXT
);

DROP TABLE IF EXISTS reservations CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES properties(id),
  user_id INTEGER REFERENCES users(id)
);