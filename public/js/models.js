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
      return "/api/beer/" + this.get("id");
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

  // ---------- Locations ---------- //


  models.Location = Backbone.Model.extend({

  });

  models.Locations = ApiCollection.extend({
    model: models.Location,
    url: "/api/locations",

    parse: function(resp) {
      return resp.data;
    }

  });


  // ---------- Favorites ---------- //


  // models.FavoriteCollection = Backbone.Model.extend({

  // });

  // models.FavoritesCollection = Backbone.Firebase.Collection.extend({

  // model: Beers,
  // url: "https://kt-musicapp.firebaseio.com/favorites",


  // });

})(tiy.models);

// ----- console ----- //


//var brews = new tiy.models.Breweries();
//brews.url();
//brews.fetch();
