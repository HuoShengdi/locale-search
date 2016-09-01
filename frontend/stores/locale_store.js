const _store = {"locales": {}, "attributes": {}};


const LocaleStore = {
  locales(){
    return Object.assign({}, _store["locales"]);
  },
  attribute(name){
    return Object.assign({}, _store["attributes"][name]);
  },

  setLocale(locale){
    _store["locales"][locale.name] = locale;
  },

  resetLocales(locales){
    _store["locales"] = {};
    locales.forEach((locale)=>{
      this.setLocale(locale);
    });
  },

  setAttribute(data){
    Object.assign(_store["attributes"], data);
  },

  clearAttribute(name){
    delete _store["attributes"][name];
  }
};
