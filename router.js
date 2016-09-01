const LocalesController = require('./data/locales_controller.js');

module.exports = function(app) {
  const options = {
    root: __dirname + "/static/"
  };

  app.get("/", function(req, res) {
    res.sendFile('index.html', options, function(err){
      if (err){
        console.error(err);
        res.status(err.status).end();
      }
    });
  });

  app.get("/locales", LocalesController.index);

  app.get("/locales/search", LocalesController.search);
};
