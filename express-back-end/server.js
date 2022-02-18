// load .env data into process.env
require("dotenv").config();

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const morgan = require("morgan");
const cookieSession = require('cookie-session');
var cors = require('cors');
App.use(cors()) 
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
// App.use(Express.static(__dirname + '/public'));
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
// console.log(db);
db.connect();

App.use(cookieSession({
  name: 'session',
  keys: ["Secret, Secret, so many secrets", "key"],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));
App.get("/api/properties", (req, res) => {
  db.query(
    `
    SELECT
      * 
    FROM properties;
  `
  ).then(({ rows: properties }) => {
    res.json(properties);
  });
});
App.put("/api/properties/:id", (req, res) => {
  db.query(
    `
    UPDATE TABLE properties
    SET name = $2
    WHERE id = $1::integer;`, [req.params.id, req.body.name])
    .then(({ rows: properties }) => {
    res.json(properties);
  });
});
App.get("/api/properties/:id", (req, res) => {
  db.query(
    `
    SELECT
      * 
    FROM properties WHERE id = $1::integer;`, [req.params.id])
    .then(({ rows: properties }) => {
    res.json(properties);
  });
});
App.post("/api/properties", (request, response) => {
  // if (process.env.TEST_ERROR) {
  //   setTimeout(() => response.status(500).json({}), 1000);
  //   return;
  // }

  const name = request.body.name;
  const description = request.body.description;
  const location= request.body.location;
  const image = request.body.image;
  const property_type = request.body.property_type;
  const check_in_time = request.body.check_in_time;
  const check_out_time = request.body.check_out_time;
  const price_per_night = request.body.price_per_night;
  const room_size = request.body.room_size;
  const meal_plan = request.body.meal_plan;
  const pampering_session = request.body.pampering_session;
  const vet_visit = request.body.vet_visit;
  const daily_hairbrushing = request.body.daily_hairbrushing;
  const for_cat = request.body.for_cat;
  const for_dog = request.body.for_dog;
  const owner_id = request.body.owner_id;

  db.query(
    `
    INSERT INTO properties (name,
      description,
      location,
      image,
      property_type,
      check_in_time,
      check_out_time,
      price_per_night,
      room_size,
      meal_plan,
      pampering_session,
      vet_visit,
      daily_hairbrushing,
      for_cat,
      for_dog,
      owner_id) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::integer, $9::integer, $10::boolean, $11::boolean, $12::boolean, $13::boolean, $14::boolean, $15::boolean, $16::integer)
  `,
    [name,
      description,
      location,
      image,
      property_type,
      check_in_time,
      check_out_time,
      price_per_night,
      room_size,
      meal_plan,
      pampering_session,
      vet_visit,
      daily_hairbrushing,
      for_cat,
      for_dog, owner_id]
  )
    .then(() => {
      setTimeout(() => {
        response.status(204).json({});
        // updateAppointment(Number(request.params.id), request.body.interview);
      }, 1000);
    })
    .catch(error => console.log(error));
});

App.delete("/api/properties", (request, response) => {

  db.query(`DELETE FROM properties WHERE id = $1::integer`, [
    request.body.id
  ]).then(() => {
    setTimeout(() => {
      // response.status(204).json({});
  }); })
  .catch(error => console.log(error));
});
// App.use("/api", properties(db));
// // Separated Routes for each Resource
// const indexRoutes = require("./routes/index");
// const propertiesRoutes = require("./routes/properties");
// const imagesRoutes = require("./routes/images");
// const reservationsRoutes = require("./routes/reservations");

// indexRoutes(db,App);
// propertiesRoutes(db,App);
// imagesRoutes(db, App);
// reservationsRoutes(db,App);


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
