tiy.Router = Backbone.Router.extend({

  routes: {
    ""                        : "showHome",  
    "beers"                   : "showBeers",
    "breweries"               : "showBreweries",
    "styles"                  : "showStyles",
    "locations"               : "showLocations",
    "favorites"               : "showUserInfo", 
    "blog"                    : "showBlog",
    "breweries/:breweryid"    : "showBreweryLoc",
    "beers/:beerid"           : "showBeerDetails",
    // "categories/:categoryid"  : "showCategories",
  },

  initialize: function(){

    this.header = React.render(
      React.createElement(tiy.views.Header, {
        model: tiy.currentUser,
        onShowBeers: function() {
          this.navigate("beers", {trigger: true, replace: true});
        }.bind(this),
        onShowBreweries: function() {
          this.navigate("breweries", {trigger: true, replace: true});
        }.bind(this),
        onShowStyle: function() {
          this.navigate("styles", {trigger: true, replace: true});
        }.bind(this),
        onShowLocations: function() {
          this.navigate("locations", {trigger: true, replace: true});
        }.bind(this),
        onShowUserInfo: function() {
          this.navigate("favorites", {trigger: true, replace: true});
        }.bind(this),
        onShowBlog: function() {
          this.navigate("blog", {trigger: true, replace: true});
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
      // this.breweries = null;
      // this.section.setProps({collection: this.breweries});
      this.beers = null;
      this.section.setProps({collection: this.beers});
    });

    this.listenTo(tiy, "sign:in", function(){
      // this.breweries = new tiy.models.Breweries();
      // this.section.setProps({collection: this.breweries});
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
        // model: tiy.currentUser,
        onShowBeers: function() {
          this.navigate("beers", {trigger: true, replace: true});
        }.bind(this),
        onShowBreweries: function() {
          this.navigate("breweries", {trigger: true, replace: true});
        }.bind(this),
        onShowCategories: function() {
          this.navigate("styles", {trigger: true, replace: true});
        }.bind(this),
        onShowLocations: function() {
          this.navigate("locations", {trigger: true, replace: true});
        }.bind(this)
      }),
      document.querySelector("section")
    );
  },

  showBeers: function(){

    var beers = new tiy.models.Beers();
    // tell the section component to render the right section
    this.section = React.render(
      React.createElement(tiy.views.BeerListView, {
        collection: beers,

      onShowBeerDetail: function(beerId) {
        this.navigate("beers/"+beerId, {trigger: true, replace: true});
        }.bind(this),
      }),

      document.querySelector("section")
    );
    beers.fetch();
  },

  showBeerDetails: function(beerid){
    // var beers = new tiy.models.Beers();
    var beerDetails = new tiy.models.BeerDetails({id: beerid});

    this.section = React.render(
      React.createElement(tiy.views.BeerDetails, {
        model: beerDetails
      }),
      document.querySelector("section")
    );

    beerDetails.fetch();
  }, 

  showBreweryLoc: function(breweryid){
    var breweries = new tiy.models.Breweries();
    var breweryLocations = new tiy.models.BreweryLocations(null, {});

    this.section = React.render(
      React.createElement(tiy.views.BreweryLocation, {
        collection: breweryLocations
      }),
      document.querySelector("section")
    );

    breweries.fetch({
      success: function() {
        var brewery = breweries.get(breweryid);
        breweryLocations.brewery = brewery;
        breweryLocations.fetch();    
      }
    });
  }, 

  showBreweries: function(){
    var breweries = new tiy.models.Breweries();

    this.section = React.render(
      React.createElement(tiy.views.BreweryListView, {
        collection: breweries,

      onShowBreweryDetail: function(breweryId) {
        this.navigate("breweries/"+breweryId, {trigger: true, replace: true});
      }.bind(this),

      }),
      document.querySelector("section")
    );

    breweries.fetch();
  },

  showStyles: function() {
    var styles = new tiy.models.Styles();

    this.section = React.render(
      React.createElement(tiy.views.StyleList, {
        collection: styles,

      }),
      document.querySelector("section")
    );

    styles.fetch();
  },

  showLocations: function(){
    var locations = new tiy.models.Locations();

    this.section = React.render(
      React.createElement(tiy.views.LocationList, {
        collection: locations,
      }),
      document.querySelector("section")
    );
    locations.fetch();
  },

  showUserInfo: function(){
    this.section = React.render(
      React.createElement(tiy.views.UserSection, {

      }),
      document.querySelector("section")
    );
  },

  showBlog: function(){
    this.section = React.render(
      React.createElement(tiy.views.Blog, {

      }),
      document.querySelector("section")
    );
  }

});
