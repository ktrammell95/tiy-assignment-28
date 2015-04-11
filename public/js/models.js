(function(models){

  var ApiCollection = Backbone.Collection.extend({

    parse: function(resp) {
      return resp.data;
    }
  });


  // ---------- Beers ---------- //


  models.Beer = Backbone.Model.extend({

    styleName: function() {
      return (this.get('style') || {}).name;
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
      return "/api/beer/" + this.get("id");
    },

    parse: function(resp) {
      return resp.data;
    },

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


  // ---------- Categories ---------- //

  models.Style = Backbone.Model.extend({

  });

  models.Styles = ApiCollection.extend({
    model: models.Style,
    url: "/api/styles",

    parse: function(resp) {
      return resp.data;
    }

  });


  // ---------- Favorites ---------- //

  models.User = Backbone.Model.extend({

    hasBeerAsFav: function(beer) {
      return !!this.favorites.beers.get(beer.id);
    },

    addBeerAsFav: function(beer) {
      return this.favorites.beers.add(beer);
    },

    removeBeerAsFav: function(beer) {
      return this.favorites.beers.remove(beer);
    },

    hasBreweryAsFav: function(brewery) {
      // console.log(beer.toJSON(), this.favorites.beers.toJSON());
      return !!this.favorites.Brewery.get(brewery.id);
    },

    addBreweryAsFav: function(brewery) {
      return this.favorites.Brewery.add(brewery);
    },

    removeBreweryAsFav: function(brewery) {
      return this.favorites.Brewery.remove(beer);
    }

  });


  models.FavoriteBeersCollection = Backbone.Firebase.Collection.extend({

    model: models.Beer,
  
    url: function() {
      if(!tiy.isLoggedIn()){
        throw new Error("A user must be logged in");
      }

      var uid = encodeURIComponent(tiy.authData.uid);
      var url = tiy.firebaseURL + uid + "/favorites/beers/";
      return url;
    },

  });

  // models.FavoriteBreweriesCollection = Backbone.Firebase.Collection.extend({

  //   model: models.Brewery,
  
  //   url: function() {
  //     if(!tiy.isLoggedIn()){
  //       throw new Error("A user must be logged in");
  //     }
  //     var uid = encodeURIComponent(tiy.authData.uid);
  //     var url = tiy.firebaseURL + uid + "/favorites/breweries/";
  //     return url;
  //   }

  // });

})(tiy.models);

// ----- console ----- //


//var brews = new tiy.models.Breweries();
//brews.url();
//brews.fetch();
