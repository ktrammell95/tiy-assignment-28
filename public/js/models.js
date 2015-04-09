(function(models){

  var ApiCollection = Backbone.Collection.extend({

    parse: function(resp) {
      return resp.data;
    }
  });


// ---------- Breweries ---------- //

  models.Brewery = Backbone.Model.extend({
    getImages: function() {
      return (this.get('images') || {}).medium;
    },

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
      return (this.get('images') || {}).medium;
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
  });

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

  models.BeerDetails = Backbone.Model.extend({
    url: function() {
      // var bid = this.beer.id;
      return "/api/beer/" + this.get("id");
    },
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

  //   parse: function(resp) {
  //     return resp.data;
  //   }

  // });

})(tiy.models);


// ----- console ----- //


//var brews = new tiy.models.Breweries();
//brews.url();
//brews.fetch();
