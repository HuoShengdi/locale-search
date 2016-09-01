export default {

  fetchLocales(success){
    $.ajax({
      url: "/locales",
      type: "GET",
      success
    });
  },

  searchLocales(attribute, success){
    $.ajax({
      url: "/locales/search?attribute=" + attribute,
      type: "GET",
      success
    });
  }
};
