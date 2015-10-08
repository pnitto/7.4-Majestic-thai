var Collection = require('models/collection');


var AppRouter = Backbone.Router.extend({
  routers: {
    '': 'index',
  },
  initialize: function(){
    $('#container').html(JST['application']());
    this.collection = new Collection();
    return this;
  },
  index: function(){
    
  },
  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#container').html(view.render().el);
    return view;
  },
})


module.exports = AppRouter;
