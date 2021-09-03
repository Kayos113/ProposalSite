const express = require('express');
const app = express();

const time = require('./modules/deadline.js');
const messages = require('./modules/messages.js')
console.log(time.deadline + " / isPast: " + time.isPast());

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.route("/")
.get((req, res) => {
  let message;
  if(time.isPast()) {
    message = messages.messages[2];
  } else {
    message = messages.messages[1];
  }
  res.render('index',
  {
    helpText: messages.messages[0],
    displayText: message
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 7000;
}
app.listen(port, (err) => {
  if(!err) {
    console.log("Server spinning up on port: " + port);
  } else {
    console.log(err);
  }
});
