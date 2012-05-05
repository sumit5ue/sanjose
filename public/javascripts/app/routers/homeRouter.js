HomeRouter = BaseRouter.extend({

  initialize : function() {
    HomeRouter.object = this;
  },

  routes : {
    "" : "renderLogin",
    "home" : "renderLoggedInView",
    "register": "rederRegistrationView",
    "stats" : "stats",
    "deal" : "deal",
    "profile" : "profile"
  },

  renderLogin : function(){
    if (this.headerView) {
      this.headerView.forloggedIn(false);
    } else {
      this.headerView = new HeaderView();
      this.headerView.forloggedIn(false);
    }
    this.loginView = new LoginView();
  },

  rederRegistrationView: function() {
    if (this.headerView) {
      this.headerView.forloggedIn(false);
    } else {
      this.headerView = new HeaderView();
      this.headerView.forloggedIn(false);
    }
    this.registrationView = new RegistrationView();
  },

  renderLoggedInView: function() {
    this.requireLogin();
    if (this.headerView) {
      this.headerView.forloggedIn(true);
    } else {
      this.headerView = new HeaderView();
      this.headerView.forloggedIn(true);
    }
    this.homeView = new HomeView();
    this.homeView.renderProfile();
  },

  deal: function() {
    if (this.homeView) {
      this.homeView.renderDeal();
    } else {
      this.homeView = new HomeView();
      this.homeView.renderDeal();
    }
  },

  profile: function() {
    if (this.homeView) {
      this.homeView.renderProfile();
    } else {
      this.homeView = new HomeView();
      this.homeView.renderProfile();
    }
  },

  stats: function() {
    if (this.homeView) {
      this.homeView.renderStats();
    } else {
      this.homeView = new HomeView();
      this.homeView.renderStats();
    }
  }
});