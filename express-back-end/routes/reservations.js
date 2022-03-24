const express = require('express');
// const app = express();
const router  = express.Router();

module.exports = (db,app) => {
  app.post("/api/properties/book", (req, res) => {

    const { id, user_id } = req.body;
   
    
    db.query(`insert into reservations (property_id, user_id) values ($1, $2)`, [id, user_id])
      .then(data => {
        if (data.rowCount) {
          db.query(`select property_id, user_id from reservations where user_id = $1`, [user_id])
          .then(data => {
            res.send(data.rows[0]);
            console.log(data.rows);
          })
          
        } else {
          res.send(false);
        }
      })
      
  })
  
  app.get("/api/mybookings/:id", (req, res) => {
    
    db.query(
      `
      SELECT
        property_id,
        user_id,
        properties.name,
        location, image, price_per_night 
      FROM reservations JOIN properties ON
      property_id = properties.id
      
      WHERE user_id = $1 ;`, [req.params.id])
      .then(({ rows: properties }) => {
      res.json(properties);
    });
  });
  
  app.delete("/api/mybookings/delete/:id/:userID", (request, response) => {
  
    db.query(`DELETE FROM reservations WHERE property_id = $1::integer AND user_id = $2::integer`, [request.params.id, request.params.userID])
      .then(() => {
        setTimeout(() => {
          response.status(204).json({});
        }, 1000);
      })
      .catch(error => console.log(error));
  });
  
  app.get("/api/reservations/:id", (req, res) => {
    
    db.query(
      `
      SELECT
        property_id,
        users.name as user_name, properties.name as property_name,
        description, image 
      FROM reservations JOIN properties ON
      property_id = properties.id
      JOIN users ON user_id = users.id
      WHERE owner_id = $1 ;`, [req.params.id])
      .then(({ rows: reservations }) => {
      res.json(reservations);
    });
  });

  app.get("/api/ratings/:id", (req, res) => {
    
    db.query(
      `
      SELECT
        * 
      FROM ratings
      WHERE property_id = $1 ;`, [req.params.id])
      .then(({ rows: ratings }) => {
      res.json(ratings);
    });
  });
};