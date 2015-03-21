var app={

  views: {},
  models: {},
  currentUser: null,
  fire: null, //firebase reference
  firebaseURL: "https://final-app-kt.firebaseio.com/", 

  //pass it email & password & login
  login: function(userData){

    app.fire.authWithPassword(userData, function(error, authData){
      if (error) {
        console.log("Failed to login", userData.email, error);
        return;
      }
      console.log("Logged", userData.email, "in successfully");
    });

  },

  logout: function(){
    app.fire.unauth();
  },

  //pass email & password & register user
  register: function(userData){

    app.fire.createUser(userData, function(error, udata){
      if (error) {
        console.log("Error registering", userData.email, error);
        return;
      }
      console.log("Successfully registered", userData.email, "as", udata.id);
    });
  },

  onAuthCallback: function(authData){

    if (authData) {
      app.currentUser = authData;
      console.log("A user is logged in:", authData);
    } else {
      app.currentUser = null;
      console.log("No one is logged in.");
    }
    app.trigger("sign:in:out");
  },

};

_.extend(app, Backbone.Events);