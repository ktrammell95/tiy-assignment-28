(function(models){

  models.Brewery = Backbone.Model.extend({

  });

  models.Breweries = Backbone.Firebase.Collection.extend({
    model: models.Brewery,

    url: function() {
      if (!tiy.authData || !tiy.authData.uid){
        throw new Error("I need a user!");
      }
      var uid = encodeURIComponent(tiy.authData.uid);
      return tiy.firebaseURL + "/" + uid + "/breweries";
    }
  });

  models.Beer = Backbone.Model.extend({


  });

  models.Beers = Backbone.Firebase.Collection.extend({
    model: models.Beer,

    url: function() {
      if(!tiy.authData || !tiy.authData.uid){
        throw new Error("A user must be logged in");
      }
      if(!this.beer){
        throw new Error("No beers have been saved");
      }
      var uid = encodeURIComponent(tiy.authData.uid);
      var beerid = this.beer.id;
      return tiy.firebaseURL + "/" + uid + "/beers/" + beerid;
    },

    initialize: function(data, options){
      options || (options = {});
      this.beer = options.beer;
    }

  });

})(tiy.models);

//models is the namespace we are using

// ----- console ----- //

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
