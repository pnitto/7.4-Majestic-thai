var ItemView = require('views/items/itemView');
var CollectionView = require('views/collection-view');

var BoardCollectionView = CollectionView.extend({
  className: 'item-list',
  tagName: 'ul',
  ItemViewConstructor: ItemView
});

var BoardIndexView = Backbone.View.extend({
  template: JST['items/main-content'],

  initialize: function(){
    this.collectView =  new BoardCollectionView({
      collection: this.collection
    });
  },
  render: function(){
    //render the template
    this.$el.html(this.template())
    this.$el.html(this.collectView.render().el);
    return this;
  },
  remove: function(){
    this.collectView.remove();
    Backbone.View.prototype.remove.apply(this,arguments);
  }
});
module.exports = BoardIndexView;
