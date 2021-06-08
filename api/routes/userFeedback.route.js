const express = require('express');
const app = express();
const userFeedbackRoutes = express.Router();


let UserFeedback = require('../models/UserFeedback');

userFeedbackRoutes.route('/getUserFeedback').get(function (req, res) {
    console.log('in servicechghgh');
    UserFeedback.find(function (err, userFeedbacks){
    if(err){
      console.log(err);
    }
    else {
      res.json(userFeedbacks);
    }
  });
});
module.exports = userFeedbackRoutes;