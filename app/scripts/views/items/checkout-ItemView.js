var checkOut = require('models/checkout');

var CheckoutItemView = Backbone.View.extend({
  className: 'item-li',
  tagName: 'li',
  template: JST['items/checkout'],
  events: {
    'click .delete-item-btn': 'delete',
  },

  initialize: function(){
    this.listenTo(checkOut, 'remove', this.render);

  },
  render: function(){
    this.$el.html(this.template(checkOut.toJSON()));
    return this;

  },
  delete: function(){
    console.log('delete this item')
  }


});
