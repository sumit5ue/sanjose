HomeRouter = BaseRouter.extend({

  initialize : function() {
    HomeRouter.object = this;
  },

  routes : {
    "" : "renderLogin",
    "home" : "renderLoggedInView",
    "register": "rederRegistrationView"
  },

  renderLogin : function(){
    this.loginView = new LoginView();
  },

  rederRegistrationView: function() {
    this.registrationView = new RegistrationView();
  },

  renderLoggedInView : function() {
    this.requireLogin();
  }
});