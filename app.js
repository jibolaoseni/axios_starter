var express = require("express");
var logger = require("morgan");

var getRouter = require("./routes/getAxios.js");
var getAsyncRouter = require("./routes/getAsyncAxios.js");
var postRouter = require("./routes/postAxios.js");

var app = express();

app.use(logger("dev"));

app.use("/", getRouter);
app.use("/async", getAsyncRouter);
app.use("/post", postRouter);

var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
