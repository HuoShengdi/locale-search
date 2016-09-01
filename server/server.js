const express = require('express');

const app = express();

const options = {
  root: __dirname + "/../static/"
};

app.get("/", function(req, res) {
  res.sendFile('index.html', options, function(err){
    if (err){
      console.error(err);
      res.status(err.status).end();
    }
  });
});

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, 'localhost', function(err){
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000');
});
