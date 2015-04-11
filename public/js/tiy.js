window.tiy = {

  //namespace for views
  views: {},

  //namespace for models
  models: {},

  //raw authentication data
  authData: null,

  //user model
  currentUser: null,

  //base firebase url
  firebaseURL: "https://final-app-kt.firebaseio.com/",

  //firebase connection reference
  fireRef: null,

  //set everything up
  init: function(){

    //add backbone events
    _.extend(this, Backbone.Events);

    //create a model to store our current user
    this.currentUser = new tiy.models.User();

    //connect to firebase
    this.fireRef = new Firebase(this.firebaseURL);

    //give firebase a callback when a user sign in or out
    this.fireRef.onAuth(this.onAuthCallback);
  },

  //called when user logs on or out
  onAuthCallback: function(authData) {
    if (authData) {
      tiy.authData = authData;
      tiy.currentUser.set(authData.twitter.cachedUserProfile);
      tiy.currentUser.favorites = {
        beers: new tiy.models.FavoriteBeersCollection()
      }
      console.log("A user has logged in:", tiy.currentUser.get("name"));
      tiy.trigger("sign:in");
    } else {
      tiy.authData = null;
      tiy.currentUser.favorites = null;
      tiy.currentUser.clear();
      console.log("No one is signed in");
      tiy.trigger("sign:out");
    }
    tiy.trigger("sign:in:out");
  },

  //log in to twitter
  twitterLogin: function() {
    console.log("attempting to login");
    this.fireRef.authWithOAuthRedirect("twitter", function(error, authData){
      if (error) {
        console.log("Login Failed", error);
      } else {
        console.log("Authenicated successfully", authData);
      }
    });
  },

  isLoggedIn: function() {
    return !!(this.authData && this.authData.uid);
  },

  //log out of twitter
  logout: function() {
    this.fireRef.unauth();
  }
};


//console

// tiy.init();
// tiy.twitterLogin();