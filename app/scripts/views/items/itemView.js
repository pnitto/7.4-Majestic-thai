var checkOut = require('models/checkout');

var ItemView = Backbone.View.extend({
  className: 'item-li',
  tagName: 'li',
  template: JST['items/item'],
  events: {
    'click .price-btn': 'addProduct',
  },

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(checkOut,'change:items', this.render);

  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;

  },
  addProduct: function(){
    checkOut.addItem(this.model)
    console.log(checkOut)
  },
  

});

module.exports = ItemView;
