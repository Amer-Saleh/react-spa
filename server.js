// Include Server Dependencies
var express = require("express");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));

// -------------------------------------------------

// -------------------------------------------------
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
