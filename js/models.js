(function(models){

  var ApiCollection = Backbone.Collection.extend({

    apiKey: "dfca67ceb8ac12e932b3e7e1868404a1",

    apiEndpoint: null, // Must be defined by sublcass

    url: function() {
      var base = "http://api.brewerydb.com/v2/"

      return base + this.apiEndpoint + "?key=" + this.apiKey;
    },

    parse: function(resp) {
      return resp.data;
    }

  });


// ---------- Breweries ---------- //

  models.Brewery = Backbone.Model.extend({

  });

  models.Breweries = ApiCollection.extend({
    model: models.Brewery,
    apiEndpoint: "breweries"

  });

  models.VistedBreweries = Backbone.Firebase.Collection.extend({
    model: models.Brewery,

  });

  // ---------- Beers ---------- //


  models.Beer = Backbone.Model.extend({


  });


  models.Beers = Backbone.Collection.extend({
    model: models.Beer,

  });

  models.FavoritedBeers = Backbone.Firebase.Collection.extend({
    model: models.Beer,

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