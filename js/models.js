(function(models){

  var UserNotes = Backbone.Firebase.Collection.extend({

    url: function() {
      if (!app.currentUser){
        throw new Error("No one is logged in");
      }
      var uid = encodeURIComponent(app.currentUser.uid);

      return app.firebaseURL + "/notes/" + uid;
    }

  });

  models.UserNotes = UserNotes;

})(app.models);

// var uid = encodeURIComponent(tiy.currentUser.uid);
  //encodes components in the URL, converts it to a URL safe format