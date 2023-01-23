var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors({ origin: "http://localhost:3000" }));

// a manual implementation would work something like this:
// ...header('Access-Control-Allow-Origin', 'http://localhost:3000');
// ...header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// ...header('Access-Control-Allow-Headers', 'Content-Type');

app.get("/foobar-good", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(4000, function () {
  console.log("CORS-enabled web server listening on port 4000");
});
