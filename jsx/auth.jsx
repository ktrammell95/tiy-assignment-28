(function(views){

  var TextField = React.createClass({

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
            <input type={type} name={name} id={htmlID}/>
          </div>
        </div>
      );
    }

  });

//================== Login ==================//
  var Login = React.createClass({

    onSubmit: function(e){
      e.preventDefault();
      var loginData = $(e.target).serializeJSON();
      app.login(loginData);
    },

    render: function(){
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

  var LogoutButton = React.createClass({
    onClick: function(e){
      e.preventDefault();
      app.logout();
    },

    render: function(){
      return <button onClick={this.onClick}>Logout</button>;
    }
  });

//=========

  views.Login        = Login;
  views.LogoutButton = LogoutButton;

})(app.views);


//var htmlID = "react-textfield-" + name + "-" + Math.random();
  //creates a random variable
//"Email" and "Password" are used as the label that you see on the screen, that is why they are capitalized
  // <TextField name="email" label="Email"/>
  // <TextField name="password" label="Password" type="password"/>