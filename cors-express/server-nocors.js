var express = require("express");
var app = express();

app.get("/foobar-bad", function (req, res, next) {
  res.json({ msg: "Yikes, you can't call this!" });
});

app.listen(4001, function () {
  console.log("Plain web server listening on port 4001");
});
