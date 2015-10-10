
var Router = require('router');

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  window.appRouter = new Router();
  Backbone.history.start();
  });
