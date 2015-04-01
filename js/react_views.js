(function(views){

  views.TwitterLoggedIn = React.createClass({displayName: "TwitterLoggedIn",

    render: function(){
      return (
        React.createElement("div", {className: "logged-in", onClick: tiy.logout.bind(tiy)}, 
          React.createElement("img", {className: "profile-image", src: this.props.img, alt: ""}), 
          " ", 
          React.createElement("span", null, this.props.name), 
          " ", 
          React.createElement(views.Icon, {fa: "sign-out"})
        )
      );
    }

  });//calling logout from tiy.js file

  views.TwitterNotLoggedIn = React.createClass({displayName: "TwitterNotLoggedIn",

    render: function(){
      return (
        React.createElement("div", {className: "not-logged-in", onClick: tiy.twitterLogin.bind(tiy)}, 
          React.createElement("span", null, "Sign In With Twitter"), 
          " ", 
          React.createElement(views.Icon, {fa: "twitter"})
        )
      );
    }

  });//calling twitterLogin from tiy.js file

  views.TwitterLogin = React.createBackboneClass({
    getChild: function(){
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return React.createElement(views.TwitterLoggedIn, {name: name, img: img})
      } else {
        return React.createElement(views.TwitterNotLoggedIn, null)
      }
    },

    render: function(){
      return (
        React.createElement("div", {className: "twitter-login"}, 
        this.getChild()
        )
      );
    }
  });

  views.Header = React.createBackboneClass({
    render: function(){
      return (
        React.createElement("div", null, 
          React.createElement("div", {className: "logo"}, "Taskify"), 
          React.createElement(views.TwitterLogin, {model: this.props.model})
        )
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


(function(views){

  views.BeerDetail = React.createClass({displayName: "BeerDetail",
    render: function(){
      return(
        React.createElement("div", {className: "beer"}, 
          React.createElement("h3", null, "Saison Lafayette"), 
          React.createElement("div", {className: "beer_details"}, 
            React.createElement("ul", null, 
              React.createElement("li", null, "Description:"), 
              React.createElement("li", null, "ABV:"), 
              React.createElement("li", null, "Glassware:"), 
              React.createElement("li", null, "Style:")
            )
          ), 
          React.createElement("div", {className: "beer_image"}, 
            React.createElement("img", {src: "http://lorempixel.com/400/200/"})
          )
        )
      )
    }
  });

//Brewery Detail Information
  views.BreweryDetail = React.createBackboneClass({
    render: function(){
      return (
          React.createElement("div", {className: "brewery"}, 
          React.createElement("h3", null, "3 Daughters Brewing"), 
          React.createElement("div", {className: "brewery_details"}, 
            React.createElement("ul", null, 
              React.createElement("li", null, "Address"), 
              React.createElement("li", null, "Address"), 
              React.createElement("li", null, "Phone"), 
              React.createElement("li", null, "Website")
            )
          ), 
          React.createElement("div", {className: "brewery_image"}, 
            React.createElement("img", {src: "http://lorempixel.com/400/200/"})
          )
        )
      );
    }
  });

  // views.Section = React.createClass({
  //   render: function(){
  //     return(
  //       <views.BeerDetail/>
  //     )
  //   }
  // });

    views.Section = React.createClass({displayName: "Section",
    render: function(){
      return(
        React.createElement(views.BreweryDetail, null)
      )
    }
  });


})(tiy.views);
(function(views){

  views.Icon = React.createClass({displayName: "Icon",

    render: function() {
      //create font awesome class
      var cssClass= "fa fa-" + this.props.fa;
      //add spin effect
      if (this.props.spin){
        cssClass += " fa-spin";
      }
      return React.createElement("i", {className: cssClass})
    }

  });

  views.Toggle = React.createClass({displayName: "Toggle",
    render: function() {
     var icon = this.props.on ? "toggle-on" : "toggle-off";
      return(
        React.createElement("div", {className: "toggle", onClick: this.props.onToggle}, 
          React.createElement(views.Icon, {fa: icon})
        )
      );
    }
  });

  views.DeleteButton = React.createClass({displayName: "DeleteButton",
    onClick: function(e){
      e.preventDefault();
      e.stopPropagation();
      if(this.props.confirm){
        var confirmed = confirm(this.props.confirm);
        if(!confirmed){
          return;
        }
      }
      this.props.onDelete();
    },

    render: function(){
      return(
        React.createElement("div", {className: "delete-btn", onClick: this.onClick}, 
          React.createElement(views.Icon, {fa: "remove"})
        )
      );
    }
  });

  views.Breadcrumbs = React.createBackboneClass({

    onLinkClick: function(route, e){
      e.preventDefault();
      this.props.onRoute(route);
    },

    build: function(){
      return (this.props.data || []).map(function(crumb, index){
        return (
          React.createElement("a", {
          href: "#", 
          key: index, 
          onClick: this.onLinkClick.bind(this, crumb.route)}, 
            crumb.title
          )
        );
      }, this);
    },

    render: function(){
      if( !tiy.isLoggedIn() ){
        return React.createElement("div", null);
      } 
        return (
          React.createElement("div", {className: "breadcrumbs"}, 
            this.build()
          )
        );
      }
  });

})(tiy.views);
(function(views){

  views.Header = React.createBackboneClass({
    render: function(){
      return (
        React.createElement("div", {className: "header-wrapper"}, 
          React.createElement("div", {className: "header-upper"}, 
            React.createElement("div", {className: "logo"}, 
              React.createElement("h1", null, "Brewery Bee")
            ), 
            React.createElement("div", {className: "login"}, 
              React.createElement("div", null, 
               React.createElement(views.TwitterLogin, {model: this.props.model})
              )
            )
          )
        )
      );
    }
  });

})(tiy.views);
// // --------- HOME PAGE VIEW --------- //

// (function(views){

//   views.Home = React.createClass({
//     render: function(){
//       return (
//          <div className="index">
//           <div>
//             <h2>About Brewery Bee</h2>
//             <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//             </p>
//           </div>
//           <div className="images">
//             <div className="image_left">
//               <img src="images/beer2.jpg" alt="brewery" />
//               <a href="#">Beer Name</a>
//             </div>
//             <div className="image_right">
//               <img src="images/beer4.jpg" alt="brewery" />
//               <a href="#">Beer Style</a>
//             </div>
//             <div className="image_left">
//               <img src="images/beer_bottles.jpg" alt="brewery" />
//               <a href="#">Brewery Name</a>
//             </div>
//             <div className="image_right">
//               <img src="images/beer3.jpg" alt="brewery" />
//               <a href="#">Brewery Location</a>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   });

//   views.Section = React.createClass({
//     render: function(){
//       return (
//           <views.Home/>
//       );
//     }
//   });

// })(tiy.views);
// // ------------ Beer and Brewery Lists ------------ //
// (function(views){

// //Beer List information
//   views.BeerList = React.createClass({
//     render: function(){
//       return(
//         <div className="beer_list brewery_list">
//           <h2>Beer List</h2>
//             <table>
//               <thead>
//                 <th>Name</th>
//                 <th>Brewery</th>
//                 <th>Style</th>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Saison Lafayette</td>
//                   <td>Two Sisters</td>
//                   <td>IPA</td>
//                 </tr>
//               </tbody>
//             </table>
//         </div>
//       )
//     }
//   });

// //Beer List information
//   views.BreweryList = React.createClass({
//     render: function(){
//       return(
//         <div className="beer_list brewery_list">
//           <h2>Brewery List</h2>
//             <table>
//               <thead>
//                 <th>Name</th>
//                 <th>City</th>
//                 <th>State</th>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Two Sisters</td>
//                   <td>St. Petersburg</td>
//                   <td>Florida</td>
//                 </tr>
//               </tbody>
//             </table>
//         </div>
//       )
//     }
//   });


//   views.Search = React.createClass({
//     render: function(){
//       return (
//         <div className="search">
//           <form className="search-form" action="" method="">
//             <span></span>
//             <input type = "text" className="search-field" name="search" placeholder="enter keywords"/>
//             <input type = "submit" className = "search-button" name="submit"value="Search"/>
//           </form>
//         </div>
//       )
//     }
//   });
  
//   views.AlphabetList = React.createClass({
//     render: function(){
//       return (
//         <div className="alphabet">
//           <ul>
//             <li><a href="A">A</a></li>
//             <li><a href="B">B</a></li>
//             <li><a href="C">C</a></li>
//             <li><a href="D">D</a></li>
//             <li><a href="E">E</a></li>
//             <li><a href="F">F</a></li>
//             <li><a href="G">G</a></li>
//             <li><a href="H">H</a></li>
//             <li><a href="I">I</a></li>
//             <li><a href="J">J</a></li>
//             <li><a href="K">K</a></li>
//             <li><a href="L">L</a></li>
//             <li><a href="M">M</a></li>
//             <li><a href="N">N</a></li>
//             <li><a href="O">O</a></li>
//             <li><a href="P">P</a></li>
//             <li><a href="Q">Q</a></li>
//             <li><a href="R">R</a></li>
//             <li><a href="S">S</a></li>
//             <li><a href="T">T</a></li>
//             <li><a href="U">U</a></li>
//             <li><a href="V">V</a></li>
//             <li><a href="W">W</a></li>
//             <li><a href="X">X</a></li>
//             <li><a href="Y">Y</a></li>
//             <li><a href="Z">Z</a></li>
//           </ul>
//         </div>
//       );
//     }
//   });


//   views.BeerListView = React.createClass({
//     render: function(){
//       return(
//         <div className="list_views">
//           <views.Search/>
//           <views.AlphabetList/>
//           <views.BeerList/>
//         </div>
//       )
//     }
//   });

//     views.BreweryListView = React.createClass({
//     render: function(){
//       return(
//         <div className="list_views">
//           <views.Search/>
//           <views.AlphabetList/>
//           <views.BreweryList/>
//         </div>
//       )
//     }
//   });

//   // views.Section = React.createClass({
//   //   render: function(){
//   //     return(
//   //       <views.BeerListView/>
//   //     )
//   //   }
//   // });

//   views.Section = React.createClass({
//     render: function(){
//       return(
//         <views.BreweryListView/>
//       )
//     }
//   });


// })(tiy.views);
(function(views){

  views.Task = React.createBackboneClass({

    destroy: function(){
      this.props.model.destroy();
    },

    render: function() {
      var d = this.props.model.toJSON();
      return (
        React.createElement("div", {className: "task item", onClick: this.props.onClick}, 
          React.createElement("span", {className: "item-title"}, d.name), 
          React.createElement(views.DeleteButton, {
            confirm: "Really delete task? You will lose all milestones", 
            onDelete: this.destroy}), 
          React.createElement(views.Progress, {percent: d.percent_complete})
        )
      );
    }

  });

  views.Tasks = React.createBackboneClass({

    selectTask: function(model){
      this.props.onSelect(model);
    },

    getItem: function(model, index){
      return (
        React.createElement(views.Task, {
          model: model, 
          onClick: this.selectTask.bind(this, model), 
          key: index})
      );
    },

    add: function(data){
      // console.log("add task", data);
      this.props.collection.add(data);
    },

    render: function(){
      return(
        React.createElement("div", {className: "tasks list"}, 
          React.createElement("div", {className: "heading"}, 
            React.createElement("h2", null, "Tasks")
          ), 
          React.createElement("div", {className: "items"}, 
             this.props.collection.map(this.getItem) 
          ), 
          React.createElement("div", {className: "add-item"}, 
            React.createElement(views.AddForm, {adding: "task", onAdd: this.add})
          )
        )
      );
    }

  });

})(tiy.views);

//backbone class if it has a model that goes with it


// var tasks = new tiy.models.Tasks();
// var t = tasks.first();
// t.toJSON();
// t.set("percent_complete", 1);
// t = tasks.at(1);
// t.attributes.name
// t.set("percent_complete", 0.5);
// check FB