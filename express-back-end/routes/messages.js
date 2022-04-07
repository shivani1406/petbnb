const express = require('express');
// const app = express();
const router  = express.Router();

module.exports = (db,app) => {
  app.post("/api/messages/:id", (req, res) => {

    const { user_id, message } = req.body;
    let currentdate = new Date(); 
    let datetime = new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z','');;
    
    db.query(`insert into messages (reservation_id, message_by, message_text, created_on) values ($1, $2, $3, $4)`, [req.params.id, user_id, message,datetime ])
      .then(data => {
        if (data.rowCount) {
          db.query(`select * from messages where reservation_id = $1`, [req.params.id])
          .then(data => {
            res.send(data.rows[0]);
            console.log(data.rows);
          })
          
        } else {
          res.send(false);
        }
      })
      
  })
}