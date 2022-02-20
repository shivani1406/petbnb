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
const { request, response } = require("express");
const e = require("express");
const { resolveInclude } = require("ejs");
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
    FROM properties
    ;
  `,
  ).then(({ rows: properties }) => {
    res.json(properties);
  });
});
App.get("/api/search", (req, res) => {
  const search = req.body.searchquery;
  console.log(req.body.searchquery);
  db.query(
    `
    SELECT
      * 
    FROM properties
    WHERE location = $1::text;
  `, [search]
  ).then(({ rows: properties }) => {
    res.json(properties);
  });
});

App.put("/api/properties/:id", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const location = req.body.location;
  const image = req.body.image;
  const property_type = req.body.property_type;
  const check_in_time = req.body.check_in_time;
  const check_out_time = req.body.check_out_time;
  const price_per_night = req.body.price_per_night;
  const room_size = req.body.room_size;
  const meal_plan = req.body.meal_plan;
  const pampering_session = req.body.pampering_session;
  const vet_visit = req.body.vet_visit;
  const daily_hairbrushing = req.body.daily_hairbrushing;
  const for_cat = req.body.for_cat;
  const for_dog = req.body.for_dog;
  db.query(
    `
    UPDATE properties
    SET name = $2::text , description = $3::text, location = $4::text, image = $5::text, property_type = $6::text, check_in_time = $7, check_out_time = $8, price_per_night = $9, room_size = $10, meal_plan = $11, pampering_session = $12, vet_visit = $13, daily_hairbrushing = $14, for_cat = $15, for_dog = $16
    WHERE id = $1::integer;`, [req.params.id, name, description, location, image, property_type, check_in_time, check_out_time, price_per_night, room_size, meal_plan, pampering_session, vet_visit, daily_hairbrushing, for_cat, for_dog])
    .then(() => {
      res.json("updated successfully");
    }).catch(error => console.log(error));
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
  const location = request.body.location;
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

App.delete("/api/properties/:id", (request, response) => {

  db.query(`DELETE FROM properties WHERE id = $1::integer`, [request.params.id])
    .then(() => {
      setTimeout(() => {
        response.status(204).json({});
        // updateAppointment(Number(request.params.id), request.body.interview);
      }, 1000);
    })
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



App.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  db.query(`SELECT email, password FROM USERS WHERE EMAIL = $1`, [email])
    .then(data => {
      if (data.rows[0]["password"] === password) {
        res.send(data.rows[0]["email"]);
      } else {
        res.send("invalid user");
      }
    })
})

App.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const role = "guest";
  const avatar_url = "profile_pic_url";
  db.query(`insert into users (name, email, password, role, avatar_url) values ($1, $2, $3, $4, $5)`, [name, email, password, role, avatar_url])
    .then(data => {
      if (data.rowCount) {
        console.log(email);
        db.query(`select name from users where email = $1`, [email])
        .then(data => {
          res.send(data.rows[0]["name"]);
        })
        
      } else {
        res.send(false);
      }
    })
})


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
