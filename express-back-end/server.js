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

const server = require("http").Server(App);
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", socket => {
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const { request, response } = require("express");
const e = require("express");
const { resolveInclude } = require("ejs");
const db = new Pool(dbParams);


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


// // Separated Routes for each Resource
const indexRoutes = require("./routes/index");
const propertiesRoutes = require("./routes/properties");
const imagesRoutes = require("./routes/images");
const reservationsRoutes = require("./routes/reservations");
const messagesRoute = require("./routes/messages");

indexRoutes(db,App);
propertiesRoutes(db,App);
imagesRoutes(db, App);
reservationsRoutes(db,App);
messagesRoute(db,App);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
