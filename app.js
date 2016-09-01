const express = require('express');

const app = express();

require('./router')(app);




app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, 'localhost', function(err){
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000');
});
