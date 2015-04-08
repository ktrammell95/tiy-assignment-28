(function(models){

  var ApiCollection = Backbone.Collection.extend({

    parse: function(resp) {
      return resp.data;
    }

  });


// ---------- Breweries ---------- //

  models.Brewery = Backbone.Model.extend({
    getImages: function() {
      return (this.get('images') || {}).large;
    }

  });

  models.Breweries = ApiCollection.extend({
    model: models.Brewery,
    url: "/api/breweries",

    parse: function(resp) {
      return resp.data;
    }

  });

  models.BreweryLocation = Backbone.Model.extend({
    getImages: function() {
      return (this.get('images') || {}).large;
    }
  });

  models.BreweryLocations = Backbone.Collection.extend({
    model: models.BreweryLocation,
    initialize: function(data, opts) {
      this.brewery = opts.brewery;
    },
    url: function() {
      var bid = this.brewery.id;
      return "/api/brewery/" + bid + "/locations";
    },
    parse: function(resp) {
      return resp.data;
    }

    // on the brewery page
    // you need to have a `brewery` model
    // then create a new locations collection:
    // var breweryLocations = new BreweryLocations(null, {brewery: brewery});
    // then you can fetch its data:
    // breweryLocations.fetch();

  });


  // models.VisitedBreweries = Backbone.Firebase.Collection.extend({
  //   model: models.Brewery,


  //   url: function() {
  //     if(!tiy.authData || !tiy.authData.uid){
  //       throw new Error("A user must be logged in");
  //     }
  //     if(!this.brewery){
  //       throw new Error("No breweries have been selected");
  //     }
  //     var uid = encodeURIComponent(tiy.authData.uid);
  //     var bid = this.brewery.id;
  //     return tiy.firebaseURL + "/" + uid + "/breweries/" + bid;
  //   },
  // });


  // ---------- Beers ---------- //


  models.Beer = Backbone.Model.extend({

    styleShortName: function() {
      return (this.get('style') || {}).shortName;
    },

    availabilityName: function() {
      return (this.get('available') || {}).name;
    },

    labelsIcon: function() {
      return (this.get('labels') || {}).icon;
    },
  });


  models.Beers = ApiCollection.extend({
    model: models.Beer,
    url: "/api/beers",
    parse: function(resp) {
      return resp.data;
    }
  });

  // models.FavoritedBeers = Backbone.Firebase.Collection.extend({
  //   model: models.Beer,

  //   url: function() {
  //     if(!tiy.authData || !tiy.authData.uid){
  //       throw new Error("A user must be logged in");
  //     }
  //     if(!this.beer){
  //       throw new Error("No beers have been selected");
  //     }
  //     var uid = encodeURIComponent(tiy.authData.uid);
  //     var bid = this.beer.id;
  //     return tiy.firebaseURL + "/" + uid + "/beers/" + tid;
  //   },

  // });

  // ---------- Categories ---------- //

  // models.Category = Backbone.Model.extend({

  // });

  // models.Categories = ApiCollection.extend({
  //   model: models.Category,
  //   url: "/api/categories"


  // });

    // ---------- Search ---------- //

//   models.Search = Backbone.Model.extend({

//   });

//   models.Searches = ApiCollection.extend({
//     model: models.Search,
//     url: "/api/search/q="


//   });

})(tiy.models);

//models is the namespace we are using

// ----- console ----- //


//var brews = new tiy.models.Breweries();
//brews.url();
//brews.fetch();
