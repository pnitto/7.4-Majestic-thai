var Collection = require('models/collection');
var BoardIndexView = require('views/items/ListView');
var CheckoutModel = require('models/checkout');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  events: {
    'index': 'fetch'
  },
  initialize: function(){
    $('#container').html(JST['application']());
    this.collections = new Collection();
    //console.log(this.collections)
    this.checkOut = new CheckoutModel();
    return this;
  },
  index: function(){
    var view = new BoardIndexView({
      collection: this.collections
    });

    this.collections.fetch();
    this.showView(view);
  },
  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#container').html(view.render().el);
    return view;
  },
});


module.exports = AppRouter;
