const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Garage!");
});
 
module.exports.app = app;
