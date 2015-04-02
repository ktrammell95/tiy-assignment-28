(function(models){

  var ApiCollection = Backbone.Collection.extend({

    parse: function(resp) {
      return resp.data;
    }

  });


// ---------- Breweries ---------- //

  models.Brewery = Backbone.Model.extend({

  });

  models.Breweries = ApiCollection.extend({
    model: models.Brewery,
    url: "/api/breweries"

  });

  models.VistedBreweries = Backbone.Firebase.Collection.extend({
    model: models.Brewery,


    url: function() {
      if(!tiy.authData || !tiy.authData.uid){
        throw new Error("A user must be logged in");
      }
      if(!this.brewery){
        throw new Error("No breweries have been selected");
      }
      var uid = encodeURIComponent(tiy.authData.uid);
      var bid = this.brewery.id;
      return tiy.firebaseURL + "/" + uid + "/breweries/" + bid;
    },
  });

  // ---------- Beers ---------- //


  models.Beer = Backbone.Model.extend({


  });


  models.Beers = ApiCollection.extend({
    model: models.Beer,
    url: "/api/beers"

  });

  models.FavoritedBeers = Backbone.Firebase.Collection.extend({
    model: models.Beer,

    url: function() {
      if(!tiy.authData || !tiy.authData.uid){
        throw new Error("A user must be logged in");
      }
      if(!this.beer){
        throw new Error("No beers have been selected");
      }
      var uid = encodeURIComponent(tiy.authData.uid);
      var bid = this.beer.id;
      return tiy.firebaseURL + "/" + uid + "/beers/" + tid;
    },

  });

  // ---------- Categories ---------- //

  models.Category = Backbone.Model.extend({

  });

  models.Categories = ApiCollection.extend({
    model: models.Category,
    url: "/api/categories"


  });

    // ---------- Search ---------- //

  models.Search = Backbone.Model.extend({

  });

  models.Searches = ApiCollection.extend({
    model: models.Search,
    url: "/api/search/q="


  });

})(tiy.models);

//models is the namespace we are using

// ----- console ----- //


//var brews = new tiy.models.Breweries();
//brews.url();
//brews.fetch();








// var c = new tiy.models.Tasks();
// c.url();
// c.add({name: "write data models"});
// var ms = new tiy.models.Milestones();
// var ts = new tiy.models.Tasks();
// ts;
// var t = ts.first();
// var ms = new tiy.models.Milestones(null, {task: t});
// ms;
// ms.url();
// ms.add({name: "create tasks collection"});
  //look at Firebase
// 

// milestone.get("completed_at");


// var tasks = new tiy.models.Tasks();
// var t = tasks.first();
// t.get("name");
// t.milestones;
// t.milestones.first().get("name");


// tiy.router.tasks;
// var t = tiy.router.tasks.first();
// t;
// t.id;
// tiy.router.main.setProps({task: t.id})