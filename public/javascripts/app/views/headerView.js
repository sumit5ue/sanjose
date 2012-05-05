HeaderView = Backbone.View.extend({
  template : JST["header"],

  events : {
    "click .header-deals" : "createNewDeal"
  },

  initialize: function() {
    this.el = $("#header");
    this.render();
    var that = this;
    $(this.el).find(".header-deals").click(function() {
      that.createNewDeal();
    });
    $(this.el).find(".header-home").click(function() {
      that.goToHome();
    });
  },

  render: function() {
    $('#header').html(this.template());
    $(this.el).find(".header-options-looged-out").hide();
    $(this.el).find(".header-options-looged-in").hide();
  }, 

  forloggedIn: function(loggedIn) {
    if (loggedIn) {;
      $(this.el).find(".header-options-looged-in").show();
      $(this.el).find(".header-options-looged-out").hide();
    } else {
      $(this.el).find(".header-options-looged-out").hide();
      $(this.el).find(".header-options-looged-in").hide();
    }
  },

  createNewDeal: function() {
    window.location.hash = "#deal";
  },

  goToHome: function() {
    window.location.hash = "#home";
  }
});