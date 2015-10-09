var BoardModel = require('models/board-model');

var Collection = Backbone.Collection.extend({
  model: BoardModel,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/snowboard"
});

module.exports = Collection;
