(function(views){

  var TextField = React.createClass({displayName: "TextField",

    render: function(){
      var name = this.props.name;
      var htmlID = "react-textfield-" + name + "-" + Math.random();
      var label = this.props.label || name;
      var type = this.props.type || "text";
      return (
        React.createElement("div", {className: "textfield"}, 
          React.createElement("div", null, 
            React.createElement("label", {htmlFor: htmlID}, label)
          ), 
          React.createElement("div", null, 
            React.createElement("input", {type: type, name: name, id: htmlID})
          )
        )
      );
    }

  });

//================== Login ==================//
  var Login = React.createClass({displayName: "Login",

    onSubmit: function(e){
      e.preventDefault();
      var loginData = $(e.target).serializeJSON();
      app.login(loginData);
    },

    render: function(){
      return (
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement(TextField, {name: "email", label: "Email"}), 
          React.createElement(TextField, {name: "password", label: "Password", type: "password"}), 

          React.createElement("button", null, "Sign In")
        )
      );
    }
  });

//================== LogoutButton ==================//

  var LogoutButton = React.createClass({displayName: "LogoutButton",
    onClick: function(e){
      e.preventDefault();
      app.logout();
    },

    render: function(){
      return React.createElement("button", {onClick: this.onClick}, "Logout");
    }
  });

//=========

  views.Login        = Login;
  views.LogoutButton = LogoutButton;

})(app.views);


// //var htmlID = "react-textfield-" + name + "-" + Math.random();
//   //creates a random variable
// //"Email" and "Password" are used as the label that you see on the screen, that is why they are capitalized
//   // <TextField name="email" label="Email"/>
//   // <TextField name="password" label="Password" type="password"/>
// app.views={};

(function(views){

  var Chapters = React.createClass({displayName: "Chapters",
    render: function() {
      return React.createElement("li", null, "Chapters")
    }
  });

  var References = React.createClass({displayName: "References",
    render: function() {
      return React.createElement("li", null, "References")
    }
  });

  var PgView = React.createClass({displayName: "PgView",

    getView: function(show) {
      if (show === "chapters") {
        return React.createElement(Chapters, null)
      }
      else if (show === "references") {
        return React.createElement(References, null)
      }
    },

    onNav: function(show){
      this.props.onShow(show);
    },

    render: function() {
      var showing = this.getView(this.props.show);
      return (
        React.createElement("ul", null, 
          React.createElement("li", {onClick: this.onNav.bind(this, "chapters")}, "Chapters"), 
          React.createElement("li", {onClick: this.onNav.bind(this, "references")}, "References")
        )
      )
    }
  });
// });
    views.PgView = PgView;
    views.Chapters = Chapters;
    views.References = References;


})(app.views);
(function(views){

  var Notes = React.createBackboneClass({

    makeLI: function(model, index){
      return React.createElement("li", {key: index}, model.get("note"));
    },

    render: function(){
      if (this.props.collection){
        return (
          React.createElement("ul", null, 
            this.props.collection.map(this.makeLI)
          )
        );
      } else {
        return (
          React.createElement("ul", null, 
            React.createElement("li", null, "Nothing to show")
          )
          );
       }
     }

  });

  views.Notes = Notes;
  
})(app.views);

//this is going to be stored as backbone collection and firebase collection