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

  views.Blogfields = React.createClass({displayName: "Blogfields",
    render: function(){
      return(
        React.createElement("form", null, 
          React.createElement("h4", null, "Title:"), React.createElement("br", null), 
          React.createElement("input", {type: "text", name: "title"}), 
          React.createElement("br", null), 
          React.createElement("h4", null, "Blog Post:"), React.createElement("br", null), 
          React.createElement("input", {type: "text", name: "lastname"})
        )
      )
    }
  });

  views.Section = React.createClass({displayName: "Section",
    render: function(){
      return(
        React.createElement(views.Blogfields, null)
      )
    }
  });

  views.Blog = React.createClass({displayName: "Blog",
    render: function(){
      return(
        React.createElement("div", {className: "blog"}, 
          React.createElement("h3", null, "Title et accusamus et iusto"), 
          React.createElement("p", null, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")
        )
      )
    }
  });

  views.Section = React.createClass({displayName: "Section",
    render: function(){
      return(
        React.createElement(views.Blog, null)
      )
    }
  });


})(tiy.views);
(function(views){

  views.BeerDetails = React.createBackboneClass({

    getInitialState: function() {
      var beer = this.props.model; // find the beer...
      return {
        favorited: tiy.currentUser.hasBeerAsFav(beer)
      };
    },

    componentDidMount: function() {      
      tiy.currentUser.favorites.beers.on("sync", function() {
        var beer = this.props.model; // find the beer...      
        this.setState({favorited: tiy.currentUser.hasBeerAsFav(beer)});
      }, this);
    }, 

    checkFavorite: function(e){
      e.preventDefault();
      var beer = this.props.model; // find the beer...
      if (tiy.currentUser.hasBeerAsFav(beer)) {
        tiy.currentUser.removeBeerAsFav(beer);
        this.setState({favorited: false});
      } else {
        tiy.currentUser.addBeerAsFav(beer);
        this.setState({favorited: true});
      }
    },

    render: function(){
      var b = this.props.model.toJSON();
      var beer = this.props.model;
      var favButton;
      if (this.state.favorited) {
        favButton = React.createElement("a", {"data-beer-id": b.id, className: "btn btn-lg btn-success", href: "#", onClick: this.checkFavorite}, 
                  React.createElement("i", {className: "fa fa-beer fa-2x pull-left"}), "Remove Favorite");
      } else {
        favButton = React.createElement("a", {"data-beer-id": b.id, className: "btn btn-lg btn-success", href: "#", onClick: this.checkFavorite}, 
                  React.createElement("i", {className: "fa fa-beer fa-2x pull-left"}), "Add Favorite");
      }

      return(
        React.createElement("div", null, 
          React.createElement("div", {className: "beer"}, 
            React.createElement("h3", null, b.name), 
            React.createElement("div", {className: "favButton"}, 
              favButton
            ), 
            React.createElement("div", {className: "beer_details"}, 
              React.createElement("ul", null, 
                React.createElement("li", null, "Description: ", b.description), 
                React.createElement("li", null, "ABV: ", b.abv), 
                React.createElement("li", null, "Glassware: ", (b.glass || {}).name), 
                React.createElement("li", null, "Availability: ", (b.available|| {}).name), 
                React.createElement("li", null, "Style: ", (b.style|| {}).shortName), 
                React.createElement("li", null, "Style Description: ", (b.style|| {}).description)
              )
            ), 
            React.createElement("div", null, 
              React.createElement("img", {src: (b.labels|| {}).medium})
            )
          )
        )
      )
    }
  });

//Brewery Detail Information
  views.BreweryLocation = React.createBackboneClass({
    getBreweryLocation: function(model) {
          return (
          React.createElement("div", null, 
            React.createElement("h3", null, model.collection.brewery.get("name")), 
            React.createElement("div", {className: "brewery_details"}, 
              React.createElement("ul", null, 
                React.createElement("li", null, model.get("locationTypeDisplay")), 
                React.createElement("li", null, model.get("streetAddress")), 
                React.createElement("li", null, model.get("locality"), ", ", model.get("region"), " ", model.get("postalCode")), 
                React.createElement("li", null, model.get("countryIsoCode")), 
                React.createElement("li", null, model.get("phone")), 
                React.createElement("li", null, model.get("website"))
              )
            ), 
            React.createElement("div", {className: "brewery_image"}, 
              React.createElement("img", {src: model.collection.brewery.getImages()})
            ), 
            React.createElement("div", {className: "description"}, 
              React.createElement("p", null, model.collection.brewery.get("description"))
            )
          )
          );
        },

    render: function(){
      return (
        React.createElement("div", {className: "brewery"}, 
          this.props.collection.map(this.getBreweryLocation)
        )
      );
    }
  });


})(tiy.views);
(function(views){

  views.BeerFavorites = React.createBackboneClass({
    getBeerFavorites: function(model) {
      return (
        React.createElement("div", {className: "beer_name"}, 
          React.createElement("h3", null, "name"), 
          React.createElement("div", {className: "beer_image"}, 
            React.createElement("img", {src: "http://lorempixel.com/100/100/"})
          ), 
          React.createElement("div", {className: "user_beer"}, 
            React.createElement("ul", null, 
              React.createElement("li", null, "Description:")
            )
          )
        )
      );
    },

    render: function(){
      return(
        React.createElement("div", null, 
          this.props.collection.map(this.getBeerFavorites)
        )
      )
    }
  });

//Brewery Detail Information
  views.BreweryFavorites = React.createBackboneClass({
    render: function(){
      return (
          React.createElement("div", {className: "brewery_name"}, 
          React.createElement("h3", null, "3 Daughters Brewing"), 
          React.createElement("div", {className: "brewery_image"}, 
            React.createElement("img", {src: "http://lorempixel.com/100/100/"})
          ), 
          React.createElement("div", {className: "user_brewery"}, 
            React.createElement("ul", null, 
              React.createElement("li", null, "Address"), 
              React.createElement("li", null, "Address"), 
              React.createElement("li", null, "Phone"), 
              React.createElement("li", null, "Website")
            )
          )
        )
      );
    }
  });

  views.FavoritesSection = React.createClass({displayName: "FavoritesSection",
    render: function(){
      return(
        React.createElement("div", {className: "users"}, 
          React.createElement("div", {className: "user_left"}, 
            React.createElement("h2", null, "Beers"), 
            React.createElement(views.BeerFavorites, null)
          ), 
          React.createElement("div", {className: "user_right"}, 
            React.createElement("h2", null, "Breweries"), 
            React.createElement(views.BreweryFavorites, null)
          )
        )
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

    beerList: function(e) {
      e.preventDefault();
      this.props.onShowBeers();
    },

    categoryList: function(e) {
      e.preventDefault();
      this.props.onShowCategories();
    },

    breweryList: function(e) {
      e.preventDefault();
      this.props.onShowBreweries();
    },

    locationList: function(e) {
      e.preventDefault();
      this.props.onShowLocations();
    },

    styles: function(e) {
      e.preventDefault();
      this.props.onShowStyle();
    },

    favorites: function(e) {
      e.preventDefault();
      this.props.onShowFavorites();
    },

    render: function(){
      return (
        React.createElement("div", {className: "header-wrapper"}, 
          React.createElement("div", {className: "header-upper"}, 
            React.createElement("div", {className: "logo"}, 
              React.createElement("img", {src: "images/BreweryBeeLogo4.svg", alt: "Brewery Bee"})
            ), 
            React.createElement("div", {className: "login"}, 
              React.createElement("div", null, 
               React.createElement(views.TwitterLogin, {model: this.props.model})
              )
            )
          ), 
          React.createElement("div", {className: "header-nav"}, 
            React.createElement("ul", {className: "primary-nav"}, 
            React.createElement("li", null, React.createElement("a", {href: "#"}, "Home")), 
            React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.beerList}, "Find a Beer")
            ), 
            React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.breweryList}, "Find a Brewery")), 
            React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.styles}, "Beer Styles")), 
            React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.favorites}, "Favorites"))
          )
          )
        )
      );
    }
  });

})(tiy.views);
// --------- HOME PAGE VIEW --------- //

(function(views){


  views.About = React.createClass({displayName: "About",
    render: function(){
      return (
          React.createElement("div", null, 
            React.createElement("h2", null, "About Brewery Bee"), 
            React.createElement("p", null, "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\""
            )
          )
      );
    }
  });

  views.HomeImages = React.createClass({displayName: "HomeImages",

    beerList: function(e) {
      // console.log("beerList");
      e.preventDefault();
      this.props.onShowBeers();
    },

    categoryList: function(e) {
      // console.log("categoryList");
      e.preventDefault();
      this.props.onShowCategories();
    },

    breweryList: function(e) {
      // console.log("breweryList");
      e.preventDefault();
      this.props.onShowBreweries();
    },

    locationList: function(e) {
      // console.log("locationList");
      e.preventDefault();
      this.props.onShowLocations();
    },

    render: function(){
      return (
          React.createElement("div", {className: "images"}, 
            React.createElement("div", {className: "image_left"}, 
              React.createElement("a", {href: "#", onClick: this.beerList}, 
                React.createElement("img", {src: "images/beer2.jpg", alt: "beer names"}), 
                "Beer Names"
              )
            ), 
            React.createElement("div", {className: "image_right"}, 
              React.createElement("a", {href: "#", onClick: this.breweryList}, 
                React.createElement("img", {src: "images/beer_bottles.jpg", alt: "brewery names"}), 
                "Brewery Names"
              )
            ), 
            React.createElement("div", {className: "image_left"}, 
              React.createElement("a", {href: "#", onClick: this.categoryList}, 
                React.createElement("img", {src: "images/beer4.jpg", alt: "beer category"}), 
                "Beer Styles"
              )
            )
            /*<div className="image_right">
              <a href="#" onClick={this.locationList}>
                <img src="images/beer3.jpg" alt="brewery locations" />
                Brewery Locations
              </a>
            </div>*/
          )
      );
    }
  });

  views.Home = React.createClass({displayName: "Home",
    render: function(){
      // window.x = this;
      return (
        React.createElement("div", {className: "index"}, 
          React.createElement(views.About, null), 
          React.createElement(views.HomeImages, {
            onShowBeers: this.props.onShowBeers, 
            onShowBreweries: this.props.onShowBreweries, 
            onShowCategories: this.props.onShowCategories, 
            onShowLocations: this.props.onShowLocations})
        )
      );
    }
  });

  views.Section = React.createClass({displayName: "Section",

    render: function(){
      return (
          React.createElement(views.Home, null)
      );
    }
  });

})(tiy.views);
// ------------ Beer and Brewery Lists ------------ //
(function(views){

//Beer List information
    
  views.BeerListView = React.createBackboneClass({

    getBeer: function(model) {
      return (
        React.createElement("tr", null, 
          React.createElement("td", null, React.createElement("a", {"data-beer-id": model.get("id"), href: "#", onClick: this.beerDetail}, model.get("name"))), 
          React.createElement("td", null, model.styleShortName()), 
          React.createElement("td", null, model.availabilityName())
        )
      );
    },

    beerDetail: function(e) {
      e.preventDefault();
      var beerId = $(e.target).attr("data-beer-id");
      // console.log(e.target, e.target.href);
      this.props.onShowBeerDetail(beerId);
    },

    render: function(){
      return(
        React.createElement("div", {className: "list_views"}, 
          React.createElement(views.AlphabetList, null), 
          React.createElement("div", {className: "beer_list brewery_list"}, 
            React.createElement("h2", null, "Beer List"), 
              React.createElement("table", null, 
                React.createElement("thead", null, 
                  React.createElement("th", null, "Name"), 
                  React.createElement("th", null, "Style"), 
                  React.createElement("th", null, "Availability")
                ), 
                React.createElement("tbody", null, 
                  this.props.collection.map(this.getBeer)
                )
              )
          )
        )
      )
    }
  });

//Beer List information
  views.BreweryListView = React.createBackboneClass({
    getBrewery: function(model) {
      return (
        React.createElement("tr", null, 
          React.createElement("td", null, React.createElement("a", {"data-brewery-id": model.get("id"), href: "#", onClick: this.breweryDetail}, model.get("name"))), 
          React.createElement("td", null, React.createElement("img", {src: model.getImages()}))
        )
      );
    },

    breweryDetail: function(e) {
      e.preventDefault();
      var breweryId = $(e.target).attr("data-brewery-id");
      // console.log(e.target, e.target.href);
      this.props.onShowBreweryDetail(breweryId);
    },

    render: function(){
      return(
        React.createElement("div", null, 
          React.createElement("div", {className: "list_views"}
            /*<views.AlphabetList/>*/
          ), 
          React.createElement("div", {className: "beer_list brewery_list"}, 
            React.createElement("h2", null, "Brewery List"), 
              React.createElement("table", null, 
                React.createElement("thead", null, 
                  React.createElement("th", null, "Logo"), 
                  React.createElement("th", null, "Name")
                ), 
                React.createElement("tbody", null, 
                  this.props.collection.map(this.getBrewery)
                )
              )
          )
        )
      )
    }
  });


  views.Search = React.createClass({displayName: "Search",
    render: function(){
      return (
        React.createElement("div", {className: "search"}, 
          React.createElement("form", {className: "search-form", action: "", method: ""}, 
            React.createElement("span", null), 
            React.createElement("input", {type: "text", className: "search-field", name: "search", placeholder: "enter keywords"}), 
            React.createElement("input", {type: "submit", className: "search-button", name: "submit", value: "Search"})
          )
        )
      )
    }
  });
  
  views.AlphabetList = React.createClass({displayName: "AlphabetList",
    render: function(){
      return (
        React.createElement("div", {className: "alphabet"}, 
          React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "number"}, "#")), 
            React.createElement("li", null, React.createElement("a", {href: "A"}, "A")), 
            React.createElement("li", null, React.createElement("a", {href: "B"}, "B")), 
            React.createElement("li", null, React.createElement("a", {href: "C"}, "C")), 
            React.createElement("li", null, React.createElement("a", {href: "D"}, "D")), 
            React.createElement("li", null, React.createElement("a", {href: "E"}, "E")), 
            React.createElement("li", null, React.createElement("a", {href: "F"}, "F")), 
            React.createElement("li", null, React.createElement("a", {href: "G"}, "G")), 
            React.createElement("li", null, React.createElement("a", {href: "H"}, "H")), 
            React.createElement("li", null, React.createElement("a", {href: "I"}, "I")), 
            React.createElement("li", null, React.createElement("a", {href: "J"}, "J")), 
            React.createElement("li", null, React.createElement("a", {href: "K"}, "K")), 
            React.createElement("li", null, React.createElement("a", {href: "L"}, "L")), 
            React.createElement("li", null, React.createElement("a", {href: "M"}, "M")), 
            React.createElement("li", null, React.createElement("a", {href: "N"}, "N")), 
            React.createElement("li", null, React.createElement("a", {href: "O"}, "O")), 
            React.createElement("li", null, React.createElement("a", {href: "P"}, "P")), 
            React.createElement("li", null, React.createElement("a", {href: "Q"}, "Q")), 
            React.createElement("li", null, React.createElement("a", {href: "R"}, "R")), 
            React.createElement("li", null, React.createElement("a", {href: "S"}, "S")), 
            React.createElement("li", null, React.createElement("a", {href: "T"}, "T")), 
            React.createElement("li", null, React.createElement("a", {href: "U"}, "U")), 
            React.createElement("li", null, React.createElement("a", {href: "V"}, "V")), 
            React.createElement("li", null, React.createElement("a", {href: "W"}, "W")), 
            React.createElement("li", null, React.createElement("a", {href: "X"}, "X")), 
            React.createElement("li", null, React.createElement("a", {href: "Y"}, "Y")), 
            React.createElement("li", null, React.createElement("a", {href: "Z"}, "Z"))
          )
        )
      );
    }
  });

})(tiy.views);
// --------- STYLES PAGE VIEW --------- //

(function(views){


  views.Map = React.createClass({displayName: "Map",
    render: function(){
      return (
        React.createElement("div", {className: "location"}, 
          React.createElement("h2", null, "Brewery by Location"), 
          React.createElement("div", {className: "map"}, 
            React.createElement("img", {src: "images/Blank_US_map_borders.svg", alt: "Satellite View of Earth"})
          )
        )
      );
    }
  });

  views.LocationList = React.createBackboneClass({
    getLocation: function(model) {
      return (
        React.createElement("div", {className: "location_list"}, 
          React.createElement("ul", null, 
            React.createElement("li", null, model.get("region"))
          )
        )
      );
    },

    render: function(){
      return (
        React.createElement("div", null, 
          this.props.collection.map(this.getLocation)
        )
      );
    }
  });


})(tiy.views);
// --------- STYLES PAGE VIEW --------- //

(function(views){

  views.StyleList = React.createBackboneClass({
    getStyle: function(model) {
      return (
        React.createElement("div", {className: "style_list"}, 
          React.createElement("h3", {className: "style_name"}, model.get("name")), 
          React.createElement("div", {className: "style_desc"}, model.get("description"))
        )
      );
    },

    render: function(){
      return (
        React.createElement("div", null, 
          this.props.collection.map(this.getStyle)
        )
      );
    }
  });




})(tiy.views);
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