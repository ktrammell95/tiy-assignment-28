tiy.Router = Backbone.Router.extend({

  routes: {
    ""            : "showHome",  
    "beers"       : "showBeers",
    // "breweries"   : "showBreweries"
  },

  initialize: function(){

    this.header = React.render(
      React.createElement(tiy.views.Header, {
        model: tiy.currentUser,
        onShowBeers: function() {
          this.navigate("beers", {trigger: true, replace: true});
        }.bind(this),
        onShowBreweries: function() {
          this.navigate("showBreweries");
          this.showBreweries();
        }.bind(this)
      }),
      document.querySelector("header")
    );

    this.navigate("", {trigger: true, replace: true});

    //  this.nav = React.render(
    //   React.createElement(tiy.views.Breadcrumbs, {
    //     onRoute: this.onNav.bind(this)
    //   }),
    //   document.querySelector("nav")
    // );

    // this.breweries = tiy.isLoggedIn() ? new tiy.models.Breweries() : null;

    // this.main = React.render(
    //   React.createElement(tiy.views.Section, {
    //   collection: this.breweries,
    //   onBrewerySelect: this.onBrewerySelect.bind(this)
    //   }),
    //   document.querySelector("section")
    // );

    this.listenTo(tiy, "sign:out", function(){
      this.breweries = null;
      this.section.setProps({collection: this.breweries});
      this.beers = null;
      this.section.setProps({collection: this.beers});
    });

    this.listenTo(tiy, "sign:in", function(){
      this.breweries = new tiy.models.Breweries();
      this.section.setProps({collection: this.breweries});
      this.beers = new tiy.models.Beers();
      this.section.setProps({collection: this.beers});
    })

  },

  onNav: function(route){
    // console.log("route", route);
    this.navigate(route, {trigger: true});
  },

  showHome: function(){
    this.section = React.render(
      React.createElement(tiy.views.Home, {
        // model: tiy.currentUser
      }),
      document.querySelector("section")
    );
  },

  showBeers: function(){
    // tell the section component to render the right section
    this.section = React.render(
      React.createElement(tiy.views.BreweryListView, {
        // ...
      }),
      document.querySelector("section")
    );
  },

  showBreweries: function(){

  },

});
