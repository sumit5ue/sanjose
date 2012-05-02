// intialize the routers
//
$(document).ready(function() {
  Backbone.history = new Backbone.History();
  var homeRouter = new HomeRouter();
  Backbone.history.start();
});
