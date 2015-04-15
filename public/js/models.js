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

    breweryNames: function() {
      return (this.get('breweries') || []).map(function(b) { return b.name }).join(' and ');
    },

  });

  models.Beers = ApiCollection.extend({
    model: models.Beer,
    url: "/api/beers?withBreweries=Y",
    
    parse: function(resp) {
      return resp.data;
    }
  });

  models.BeerDetails = Backbone.Model.extend({
    url: function() {
      return "/api/beer/" + this.get("id") + "?withBreweries=Y";
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
    getDescription: function() {
      return (this.get('description') || {});
    },
    getWebsite: function() {
      return (this.get('website') || {});
    },
    getEstablished: function() {
      return (this.get('established') || {});
    },
    getLocationType: function() {
      return (this.get('locationTypeDisplay') || {});
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
    },

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

  // models.BreweryBeers = Backbone.Collection.extend({
  //   model: models.BreweryBeers,
  //   initialize: function(data, opts) {
  //     this.brewery = opts.brewery;
  //   },
  //   url: function() {
  //     var bid = this.brewery.id;
  //     return "/api/brewery/" + bid + "/beers/?withBreweries=Y";
  //   },
  //   parse: function(resp) {
  //     return resp.data;
  //   }
  // });


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

    //need to put something in here so for when no one is signed in?

    hasBeerAsFav: function(beer) {
      return !!this.favorites.beers.get(beer.id);
    },

    addBeerAsFav: function(beer) {
      return this.favorites.beers.add(beer);
    },

    removeBeerAsFav: function(beer) {
      return this.favorites.beers.remove(beer);
    },

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


// // ----- search ----- //
//   models.Search = Backbone.Model.extend({
//   });

//   models.BeerSearchResults = ApiCollection.extend({
//     model: models.Search,
//     url: "/api/search?=/",
    
//     parse: function(resp) {
//       return resp.data;
//     }
//   });

})(tiy.models);

// ----- console ----- //


//var brews = new tiy.models.Breweries();
//brews.url();
//brews.fetch();
