'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('user');

exports.getUserDetails = function(req,res){
  var userId = req.params.userId;
  var user_retrieve = new User()
  User.find({userId:userId}, function(err,data){
    if(err){
      res.send(err);
    } else {
      res.json(data)
    }
  });
};

exports.addNewUser = function(req,res){
  var userId = req.body.userId,
  username = req.body.username;
  var user_save = new User(req.body);

  user_save.save(function(err,data){
    if(err){
        res.json(err);
    }
    else{
        res.json(data);
    }
  });
}
