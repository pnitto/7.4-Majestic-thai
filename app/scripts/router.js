var Collection = require('models/collection');
var BoardIndexView = require('views/items/ListView');
var OrderView = require('views/items/checkoutView');
var checkoutModel = require('models/checkout')

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  initialize: function(){
    this.collections = new Collection();
    //console.log(this.collections)
    return this;
  },
  index: function(){
    var view = new BoardIndexView({
      collection: this.collections
    });
    var orderview = new OrderView({
      model: checkoutModel
    })

    this.collections.fetch();

    $('#container').append(view.render().el)
    $('#container').append(orderview.render().el);

  },

});


module.exports = AppRouter;
