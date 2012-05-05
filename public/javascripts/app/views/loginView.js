LoginView = Backbone.View.extend({
  template : JST["login"],

  events : {
    "click .register" : "navigateToRegistrationView",
    "click .login" : "tryLoggingIn"
  },

  initialize: function() {
    // this.el = $("#body").get(0);
    _.bindAll(this, 'render', 'navigateToRegistrationView');
    this.render();
  },

  render: function() {
    $(this.el).html(this.template());
    $('#body').html(this.el);
    return false;
  },

  tryLoggingIn: function() {
    var loginData = {};
    loginData.userName = this.$("#login-username").val();
    loginData.password = this.$("#login-password").val();
    this.model = new Login();
    this.model.save({"loginData":loginData}, {
      success : function(model, resp) {
        window.location.hash = "#home";
      },
      error : function(model,resp) {
        window.location.hash = "";
      }
    });
  },

  navigateToRegistrationView: function() {
    window.location.hash = "#register";
  }
});