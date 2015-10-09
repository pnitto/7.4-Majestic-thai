var ItemView = require('views/items/itemView');
var CollectionView = require('views/collection-view');

var BoardCollectionView = CollectionView.extend({
  tagName: 'ul',
  ItemViewConstructor: ItemView
});

var BoardIndexView = Backbone.View.extend({
  initialize: function(){
    this.collectView =  new BoardCollectionView({
      collection: this.collection
    });
    
  },
  render: function(){
    this.$el.html(this.collectView.render().el);
    return this;
  },
  remove: function(){
    this.collectView.remove();
    Backbone.View.prototype.remove.apply(this,arguments);
  }
});
module.exports = BoardIndexView;
