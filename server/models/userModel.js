'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userId : {
    type:String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
},
{
  collection:'user'
});

module.exports = mongoose.model('user',UserSchema)
