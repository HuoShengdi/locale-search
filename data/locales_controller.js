const Locales = require('./locales.js');

const keys = Object.keys(Locales);

const LocalesController = {
  index(req, res){
    const locales = keys.map((key)=>{
      return {name: key};
    });
    res.json(locales);
  },

  search(req, res){
    if (req.query){
      const attr = req.query.attribute;
      const matches = [];
      keys.forEach((key)=>{
        const value = Locales[key]["delimiters"][attr];
        if (value){
          matches.push({locale: key, value: value});
        }else{
          return;
        }
      });
      res.json(matches);
    } else {
      res.json({});
    }
  }

};

module.exports = LocalesController;
