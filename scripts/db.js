var mongoose = require('mongoose');
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || 'mongodb://AnushanR:Anunadu16@ds127428.mlab.com:27428/login_db', { useMongoClient: true });