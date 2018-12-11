// AuthController.js
const db = require("../../models");

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');
var VerifyToken = require('./VerifyToken');

module.exports ={

Register: function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    db.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    }); 
  },




 Me: function(req, res, next) {
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    
    res.status(200).send(user);
  });
} ,VerifyToken,

 Login: function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });


      res.status(200).send({ auth: true, token: token });
    });
  },

  Logout: function(req, res) {
    res.status(200).send({ auth: false, token: null });
  }
  
}
  // add this to the bottom of AuthController.js
