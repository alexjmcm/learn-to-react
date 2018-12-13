var mongoose = require('mongoose');
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || 'mongodb://AnushanR:Anunadu16@ds129454.mlab.com:29454/heroku_8pg34zcq', { useMongoClient: true });