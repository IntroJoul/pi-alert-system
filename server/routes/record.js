const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  console.log("hey there was a request or something");
});

module.exports = recordRoutes;
