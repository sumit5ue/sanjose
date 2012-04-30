HomeRouter = BaseRouter.extend({

  initialize : function() {
    HomeRouter.object = this;
  },

  routes : {
    "home" : "renderLoggedInView",
    "": "test"
  },

  test : function(){
      alert('empty');
  },

  renderLoggedInView : function() {
    this.requireLogin();
    alert("yello");
  }
});