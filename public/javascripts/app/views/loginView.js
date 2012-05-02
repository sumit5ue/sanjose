LoginView = Backbone.View.extend({
  template : JST["login"],

  events : {
    "click .register" : "navigateToRegistrationView"
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

  navigateToRegistrationView: function() {
    window.location.hash = "#register";
  }
});