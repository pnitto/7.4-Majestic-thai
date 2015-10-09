var CheckOut = require('models/checkout');

var ItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['items/item'],
  events: {
    'click .price-btn': 'addProduct'
  },

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(appRouter.CheckOut,'change:items', this.renderCart);
  },
  render: function(){
    this.$el.prepend(this.template(this.model.toJSON()));
    //this.renderCart();
    return this;
  },
  addProduct: function(){
    //var cart = appRouter.checkOut.addItem()
    //dconsole.log(this.model)
    console.log(appRouter.CheckOut);


  }
});

module.exports = ItemView;
