DealView = Backbone.View.extend({
  template : JST["deal"],

  initialize: function() {
    this.tokenModel = new Token();
    var that = this;
    this.tokenModel.fetch({
      success: function(model) {
        that.render(model.get('token'))
        $(".dealSubmit").click(function() {
          that.submit();
        });
        $('#fileupload').fileupload({
            dataType: 'json',
            done: function (e, data) {
              $("#create").find("#preview").attr("src",data.result.src)
            }
        });
      }
    });
  },

  render: function(token) {
    $("#create").html(this.template({token:token}));
  },

  submit: function() {
    console.log($("#avatar"));
    var title = $("#create").find("#deal-title").val();
    var desc = $("#create").find("#deal-description").val();
    this.deal = new Deal();
    this.deal.save({title:title, description:desc, token:this.tokenModel.get("token")}, {
      success: function() {
        alert();
      }
    });
  }
});