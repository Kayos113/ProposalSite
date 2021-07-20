const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.route("/")
.get((req, res) => {
  res.render('index', {
    helpText: "help",
    propText: "prop"
  });
});

let port = 3400;
app.listen(port, (err) => {
  if(!err) {
    console.log("Server spinning up on port: " + port);
  } else {
    console.log(err);
  }
});
