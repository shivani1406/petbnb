const express = require('express');
// const app = express();
const router  = express.Router();
module.exports = (db,App) => {
  App.get("/properties", (request, response) => {
    db.query(
      `
      SELECT
        * 
      FROM properties
    `
    ).then(({ rows: properties }) => {
      response.json(properties);
    });
  });

  App.put("/api/properties", (request, response) => {
    // if (process.env.TEST_ERROR) {
    //   setTimeout(() => response.status(500).json({}), 1000);
    //   return;
    // }
  
    const { name,
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
    owner_id } = request.body.createProperty;
  
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
  return router;
};