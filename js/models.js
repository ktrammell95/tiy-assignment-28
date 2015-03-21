(function(models){

  var AppCollection = Backbone.Firebase.Collection.extend({

    url: function(){
      if (!tiy.currentUser) {
        throw new Error("No one is logged in");
      }

      var uid = encodeURIComponent(app.currentUser.uid);

      return app.firebaseURL + "/bookmarks/" +uid;
    }

  });

  models.AppCollection = AppCollection;


})(app.models);