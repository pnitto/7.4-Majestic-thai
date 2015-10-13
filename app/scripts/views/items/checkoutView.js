var checkoutModel = require('models/checkout');

var CheckoutView = Backbone.View.extend({

  template: JST['items/checkout'],

  events: {
    'click .delete-item-btn' : 'delete',
    'click .submit-order-btn' : 'submitOrder'
  },
  initialize: function(){
    this.listenTo(checkoutModel, 'change', this.render)
  },
  render: function(){
    this.$el.html(this.template(this.present()));
    return this;
  },
  present: function(){
    return {
      items: checkoutModel.get('items').map((p) =>{
      return p.toJSON();
    }),
      subtotal: checkoutModel.get('items').reduce(function(total, current){
          return total + Number(current.get('price'));
  },0) + ""
}
},
  delete: function(){
    console.log('delete item')
    console.log(checkoutModel.get('items'))
  },
  submitOrder: function(){
    checkoutModel.save();
    console.log("Submitting order...")
  }


});

module.exports = CheckoutView;
