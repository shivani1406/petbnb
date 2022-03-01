const express = require('express');
// const app = express();
const router  = express.Router();

module.exports = (db,App) => {

  App.get("/api/images/:id", (req, res) => {
    db.query(
      `
      SELECT
        * 
      FROM images WHERE property_id = $1::integer;`, [req.params.id])
      .then(({ rows: properties }) => {
        res.json(properties);
      });
  });
};