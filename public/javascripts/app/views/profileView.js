ProfileView = Backbone.View.extend({
  template : JST["profile"],

  initialize: function() {
    var that = this;
    this.model = new Client();
    this.model.fetch({
      success: function(model) {
        that.render()
      }
    });
  },

  render: function(token) {
    $("#profile-home").html(this.template(this.model.toJSON()));
    this.el = $("#profile-home");
  },

  submit: function() {
  }
});