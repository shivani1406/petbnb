const router = require("express").Router();

module.exports = db => {
  router.get("/properties", (request, response) => {
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
  return router;
};