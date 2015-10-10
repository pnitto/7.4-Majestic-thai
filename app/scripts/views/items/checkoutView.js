var checkoutModel = require('models/checkout');

var CheckoutView = Backbone.View.extend({

  template: JST['items/checkout'],

  initialize: function(){
    this.listenTo(checkoutModel, 'change', this.render)
  },
  render: function(){
    this.$el.html(this.template(this.present()));
    return this;
  },
  present: function(){
    return checkoutModel.get('items').map((p) =>{
      return p.toJSON();
    });
  }
});

module.exports = CheckoutView;
