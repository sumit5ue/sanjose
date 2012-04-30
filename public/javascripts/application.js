// intialize the routers
//
Backbone.history = new Backbone.History();
var homeRouter = new HomeRouter();
Backbone.history.start();

setTimeout(function() {
  window.location.hash = "#home"
}, 5000);