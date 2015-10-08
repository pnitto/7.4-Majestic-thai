var BoardModel = require('models/board-model')

var Collection = Backbone.Model.extend({
  model: BoardModel,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/snowboard"
});

module.exports = Collection;
