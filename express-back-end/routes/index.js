const express = require('express');
// const app = express();
const router  = express.Router();

module.exports = (db,app) => {

  app.get("/", (req, res) => {
    // const user_id = req.session.user_id;
    Promise.all([db.query(`SELECT * FROM users WHERE name = 'Shivani';`,
    db.query('SELECT * FROM properties;'))])
    .then(data => {
      const userData = data[0];
      const propertyData = data[1];

      const templateVars = {
        user: userData.rows[0],
        properties: propertyData.rows[0]
      };
      delete req.session.user_id;
      req.session.user_id = templateVars.user.id;
      res.render("index", templateVars);
    })

  });
};