'use strict';

module.exports = function(app) {
  var userFunctionsRoute = require('../controllers/userController');

  //user routes

  app.route('/getUserDetails/:userId').get(userFunctionsRoute.getUserDetails);
  app.route('/addUser').post(userFunctionsRoute.addNewUser);
}
