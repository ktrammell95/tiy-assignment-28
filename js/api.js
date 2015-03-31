var BreweryDB = (function(){

  //http://api.brewerydb.com/v2/?key=dfca67ceb8ac12e932b3e7e1868404a1

  //http://api.brewerydb.com/v2/brewery
  //http://api.brewerydb.com/v2/beer
  //http://api.brewerydb.com/v2/search

  function BreweryDB(brewery) {

    var apiBase = "http://api.brewerydb.com/v2/";

  }

    BreweryDB.prototype = {
    hitApi: function(url, params, cb) {
      $.ajax(url, {
        data: $.extend({
          key: ["dfca6", "7ceb8a", "c12e932", "b3e7e186", "8404a1"].join("")
        }, params),
        success: function(data) {
          cb(data);
        },
        error: function() {
          console.log("Error loading", url);
        }
      });
    },

    breweries: function(params, cb) {
      this.hitApi("/breweries/", {}, cb);
    },

    beers: function(params, cb) {
      this.hitApi("/beers/", {}, cb);
    },
    // .search({q: 'blue moon', type: 'beer'})
    search: function(params, cb) {
      this.hitApi("/search", params, cb);
    },

    beersForBrewery: function(breweryId, cb) {
      this.hitApi("/brewery/" + breweryId + "/beers", {}, cb);
    },

    loadAll: function(cb) {
      // calls callback with hash of data like below
 
      var dataGroups = {};

      var afterCB = _.after(3, cb);

      // 1 getting breweries
      this.breweries(function(data){
        dataGroups.breweries = data;
        afterCB(dataGroups);
      });

      // 2 getting beers
      this.beers(function(data){
        dataGroups.beers = data;
        afterCB(dataGroups);
      });

      // 3 getting search
      this.search(function(data){
        dataGroups.search = data;
        afterCB(dataGroups);
      });
    }

  }

  return BreweryDB
})();