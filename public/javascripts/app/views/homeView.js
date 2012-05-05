HomeView = Backbone.View.extend({
  template : JST["home"],
  clientTemplate : JST["clientTemplate"],

  initialize: function() {
    this.render();
  },

  render: function() {
    $(this.el).html(this.template());
    $('#body').html(this.el);
  },

  renderStats: function() {
  },

  renderDeal: function() {
    new DealView();
  },

  renderProfile: function() {
    new ProfileView();
  }
});