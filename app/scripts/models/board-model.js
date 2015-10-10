var BoardModel = Backbone.Model.extend({
  idAttribute: "_id",
  defaults: function(){
    return {
      name: "",
      image: "",
      description: "",
      price: "",
    }
  },

});

module.exports = BoardModel;
