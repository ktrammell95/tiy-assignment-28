(function(views){

  var TextField = React.createClass({displayName: "TextField",

    render: function(){
      var name = this.props.name;
      var htmlID = "react-textfield-" + name + "-" + Math.random();
      var label = this.props.label || name;
      var type = this.props.type || "text";
      return (
        <div className = "textfield">
          <div>
            <label htmlFor={htmlID}>{label}</label>
          </div>
          <div>
            <input type ={type} name={name} id={htmlID}/>
          </div>
        </div>
      );
    }

  });

  //================== Login ==================//

  var Login = React.createClass({displayName: "Login",
    
    onSubmit: function(e) {
      e.preventDefault();
      var loginData = $(e.target).serializeJSON();
      tiy.login(loginData);
    },

    render: function() {
      return (
        <form onSubmit={this.onSubmit}>
          <TextField name="email" label="Email"/>
          <TextField name="password" label="Password" type="password"/>

          <button>Sign In</button>
        </form>
      );
    }
  });

  //================== LogoutButton ==================//

  var LogoutButton = React.createClass({displayName: "LogoutButton",
    onClick: function(e){
      e.preventDefault();
      app.logout();
    },

    render: function() {
      return <button onClick={this.onClick}>Logout</button>;
    }
  });

  views.Login        = Login;
  views.LogoutButton = LogoutButton


})(app.views);