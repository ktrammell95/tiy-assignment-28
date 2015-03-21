$(function(){

  app.on("sign:in:out", function() {

    var col;
    if (app.currentUser) {
      col = new app.models.UserNotes();
    } else {
      col = null;
    }
    notes.setProps({collection: col});
  });

  var loginEl  = $( ".login-form"    ).get(0);
  var logoutEl = $( ".logout-button" ).get(0);
  var notesEl  = $( ".notes"         ).get(0);

  React.render(
    React.createElement(app.views.Login),
    loginEl
  );

  React.render(
    React.createElement(app.views.LogoutButton),
    logoutEl
  );

  var notes = React.render(
    React.createElement(app.views.Notes),
    notesEl
  );

  app.fire = new Firebase(app.firebaseURL);
  app.fire.onAuth(app.onAuthCallback);

});

//onAuth is a FireBase function & automatically runs

//console
// tiy.register({email: "ktrammell@exmaple.com", password: "1234"});
// tiy.login({email: "kt@exmaple.com", password: "1234"});
// tiy.currentUser; 
// tiy.logout();

// var todos = new tiy.models.UserTodoList();
// todos.url();
// todos.add({task:"do something"});