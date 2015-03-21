$(function(){

  // app.on("sign:in:out", function(){

  // });

  var loginEl  = $( ".login-form"    ).get(0);
  var logoutEl = $( ".logout-button" ).get(0);

  React.render (
    React.createElement(app.views.Login),
    loginEl
  );

  React.render (
    React.createElement(app.views.LogoutButton),
    logoutEl
  );

  app.fire = new Firebase(app.firebaseURL);
  app.fire.onAuth(app.onAuthCallback);

});