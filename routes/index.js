// var express = require('express');
// var app = express();
// var db = require('./db');
// var path = require("path");



// require("./routing/htmlRoutes")(app);
// var UserController = require('./user/UserController');
// app.use('/users', UserController);
// // app.js
// var AuthController = require('./auth/AuthController');
// app.use('/api/auth', AuthController);




// module.exports = app;
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
