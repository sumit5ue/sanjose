HomeView = Backbone.View.extend({
  template : JST["home"],

  initialize: function() {
    this.render();
  },

  render: function() {
    $(this.el).html(this.template());
    $('#body').html(this.el);
  },

  renderStats: function() {
    
  },

  renderProfile: function() {
    
  },

  renderDeal: function() {
    new DealView();
  },

  renderHome: function() {
    
  }
});