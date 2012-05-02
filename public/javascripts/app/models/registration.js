Registration = Backbone.Model.extend({
  initialize: function() {
    this.set({"username":"username", "password":"password123", "name":"name", "address":"address", "city":"city", "state":"state", "zip":"zip", "country":"country"});
  },

  url : function() {
    return "http://localhost:3000/home/register";
  }
});