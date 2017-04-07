const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post('/signup', function(req, res){
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'You successfully signed up for the Newsletter'
      });
    }
  });
});

module.exports = router;
