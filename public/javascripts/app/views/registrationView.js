RegistrationView = Backbone.View.extend({
  template : JST["registration"],

  events: {
    "click .submitMe" : "register"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    $(this.el).html(this.template());
    $('#body').html(this.el);
  },

  getDateFromView: function() {
    return {
      username : this.$("#username").val(),
      password : this.$("#password").val(),
      address : this.$("#address").val(),
      city : this.$("#city").val(),
      state : this.$("#state").val(),
      zip : this.$("#zip").val()
    };
  },

  register: function() {
    this.model = new Registration();
    this.model.save({"data":this.getDateFromView()}, {
      success : function(model, resp) {
        window.location.hash = "#home";
      },
      error : function(model,resp) {
      }
    });
  }
});