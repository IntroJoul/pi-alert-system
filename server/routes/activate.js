const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
const activateRoutes = express.Router();

activateRoutes.route("/activate").get(function (req, res) {
  console.log("activated");
});

module.exports = activateRoutes;
