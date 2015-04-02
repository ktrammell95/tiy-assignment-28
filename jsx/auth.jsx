(function(views){

  views.TwitterLoggedIn = React.createClass({

    render: function(){
      return (
        <div className="logged-in" onClick={tiy.logout.bind(tiy)}>
          <img className="profile-image" src={this.props.img} alt=""/>
          {" "}
          <span>{this.props.name}</span>
          {" "}
          <views.Icon fa="sign-out"/>
        </div>
      );
    }

  });//calling logout from tiy.js file

  views.TwitterNotLoggedIn = React.createClass({

    render: function(){
      return (
        <div className="not-logged-in" onClick={tiy.twitterLogin.bind(tiy)}>
          <span>Sign In With Twitter</span>
          {" "}
          <views.Icon fa="twitter"/>
        </div>
      );
    }

  });//calling twitterLogin from tiy.js file

  views.TwitterLogin = React.createBackboneClass({
    getChild: function(){
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return <views.TwitterLoggedIn name={name} img={img}/>
      } else {
        return <views.TwitterNotLoggedIn/>
      }
    },

    render: function(){
      return (
        <div className="twitter-login">
        {this.getChild()}
        </div>
      );
    }
  });

  views.Header = React.createBackboneClass({
    render: function(){
      return (
        <div>
          <div className="logo">Taskify</div>
          <views.TwitterLogin model={this.props.model}/>
        </div>
      );
    }
  });

})(tiy.views);

  // views.FacebookLoggedIn = React.createClass({

  //   render: function(){
  //     return (
  //       <div className="logged-in" onClick={tiy.logout.bind(tiy)}>
  //         <img className="profile-image" src={this.props.img} alt=""/>
  //         {" "}
  //         <span>{this.props.name}</span>
  //         {" "}
  //         <views.Icon fa="sign-out"/>
  //       </div>
  //     );
  //   }

  // });//calling logout from tiy.js file

  // views.FacebookNotLoggedIn = React.createClass({

  //   render: function(){
  //     return (
  //       <div className="not-logged-in" onClick={tiy.facebookLogin.bind(tiy)}>
  //         <span>Sign In With FaceBook</span>
  //         {" "}
  //         <views.Icon fa="facebook"/>
  //       </div>
  //     );
  //   }

  // });//calling twitterLogin from tiy.js file

  // views.FacebookLogin = React.createBackboneClass({
  //   getChild: function(){
  //     if (this.props.model.id) {
  //       var name = this.props.model.get("name");
  //       var img = this.props.model.get("profile_image_url");
  //       return <views.FacebookLoggedIn name={name} img={img}/>
  //     } else {
  //       return <views.FacebookNotLoggedIn/>
  //     }
  //   },

  //   render: function(){
  //     return (
  //       <div className="facebook-login">
  //       {this.getChild()}
  //       </div>
  //     );
  //   }
  // });

// })(tiy.views);

//------ console ------ //

//tiy.views;
// tiy.init();
// var c = tiy.views.TwitterLoggedIn;
// var elem = React.createElement(c, {name: "jd", img: "http://lorempixel.com/50/50"});
// React.render(elem, document.body);

// tiy.init();
// tiy.currentUser;
// var c = tiy.views.TwitterLogin;
// var elem = React.createElement(c, {model: tiy.currentUser});
// React.render(elem, document.body);

// tiy.logout();