const express = require('express');
// const app = express();
const router  = express.Router();
module.exports = (db,App) => {
  App.get("/api/properties1/:owner_id", (req, res) => {
    db.query(
      `
      SELECT
        * 
      FROM properties
      WHERE owner_id = $1
      ;
    `,[req.params.owner_id]
    ).then(({ rows: properties }) => {
      res.json(properties);
    });
  });
  
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
};