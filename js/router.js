tiy.Router = Backbone.Router.extend({

  routes: {
    ""            : "showHome",  
    // "beers"       : "showBeers",
    // "breweries"   : "showBreweries"
  },

  initialize: function(){

    this.header = React.render(
      React.createElement(tiy.views.Header, {
      model: tiy.currentUser
      }),
      document.querySelector("header")
    );

    this.section = React.render(
      React.createElement(tiy.views.Section, {
      model: tiy.currentUser
      }),
      document.querySelector("section")
    );

     this.nav = React.render(
      React.createElement(tiy.views.Breadcrumbs, {
        onRoute: this.onNav.bind(this)
      }),
      document.querySelector("nav")
    );

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
      this.main.setProps({collection: this.breweries});
    });

    this.listenTo(tiy, "sign:in", function(){
      this.breweries = new tiy.models.Breweries();
      this.main.setProps({collection: this.breweries});
    })

  },

  onNav: function(route){
    // console.log("route", route);
    this.navigate(route, {trigger: true});
  },

  showIndex: function(){
    this.navigate("home", {trigger: true, replace: true});
  },

  showBeers: function(){
    this.main.setProps({beerId: null});

    //set the breadcrumbs
    this.nav.setProps({data: [
      {route: "beers", title: "Beers"}
    ]});
  },

   showBreweries: function(){
    this.main.setProps({breweryId: null});

    //set the breadcrumbs
    this.nav.setProps({data: [
      {route: "breweries", title: "Breweries"}
    ]});
  },

});

// var tid = tiy.router.tasks.first().id;
// tid;
// tiy.router.navigate("tasks/" + tid);
// tiy.router.navigate("tasks");
// tiy.router.navigate("tasks/" + tid, {trigger:true});