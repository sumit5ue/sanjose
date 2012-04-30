BaseRouter = Backbone.Router.extend({
  requireLogin : function() {
    console.log("requiring login");
    return true;
  }
});