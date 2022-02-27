const express = require('express');
// const app = express();
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db,app) => {

  app.post("/api/search", (req, res) => {
    const search = req.body.searchquery;
    console.log(req.body.searchquery);
    db.query(
      `
      SELECT
        * 
      FROM properties
      WHERE LOWER(location) = LOWER($1::text);
    `, [search]
    ).then(({ rows: properties }) => {
      res.json(properties);
    });
  });
  app.get("/logout", (req, res) => {
    req.session = null;
    res.send("Successfully Logged out");
  });
  
  app.get("/login", (req, res) => {
    req.session = null;
    res.send("cleared session");
  });
  
  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    db.query(`SELECT email, password , name, id, role FROM USERS WHERE EMAIL = $1`, [email])
      .then(data => {
        if(data.rows[0] === undefined)
        {
          res.send("invalid user");
        } else {
          console.log(data.rows[0]);
          if (bcrypt.compareSync(password, data.rows[0]["password"])) {
            res.send(data.rows[0]);
          } else {
            res.send("invalid user");
          }
        }
        
      })
  })
  
  app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    const hashpassword = bcrypt.hashSync(password, 10);
    const role = "guest";
    const avatar_url = "profile_pic_url";
    db.query(`insert into users (name, email, password, role, avatar_url) values ($1, $2, $3, $4, $5)`, [name, email, hashpassword, role, avatar_url])
      .then(data => {
        if (data.rowCount) {
          db.query(`select email, password , name, id, role from users where email = $1`, [email])
          .then(data => {
            res.send(data.rows[0]);
          })
          
        } else {
          res.send(false);
        }
      })
  })
};