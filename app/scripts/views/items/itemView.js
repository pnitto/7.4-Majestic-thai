var ItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['items/item'],

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render)
  },
  render: function(){
    this.$el.prepend(this.template(this.model.toJSON()))
    return this;
  }
})
