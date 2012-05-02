RegistrationView = Backbone.View.extend({
  template : JST["registration"],

  events: {
    "click .submit" : "register"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    $(this.el).html(this.template());
    $('#body').html(this.el);
  },

  register: function() {
    this.model = new Registration();
    this.model.save();
  }
});