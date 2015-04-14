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

  // views.Header = React.createBackboneClass({
  //   render: function(){
  //     return (
  //       <div>
  //         <views.TwitterLogin model={this.props.model}/>
  //       </div>
  //     );
  //   }
  // });

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
            React.createElement("h2", null, b.name), 
            React.createElement("div", {className: "favButton"}, 
              favButton
            ), 
            React.createElement("div", {className: "beer_details description"}, 
              React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("span", {className: "bold "}, "Description:"), React.createElement("span", null, " ", b.description)), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Brewery:"), React.createElement("span", null, " ", (b.breweries || []).map(function(b) { return b.name }).join(' and '))), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "ABV:"), React.createElement("span", null, " ", b.abv)), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Glassware:"), React.createElement("span", null, " ", (b.glass || {}).name)), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Availability:"), React.createElement("span", null, " ", (b.available|| {}).description)), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Style:"), React.createElement("span", null, " ", (b.style|| {}).name)), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Style Description:"), React.createElement("span", null, " ", (b.style|| {}).description))
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
            React.createElement("h2", null, model.collection.brewery.get("name")), 
            React.createElement("div", null, 
              React.createElement("img", {className: "brewery_image", src: model.collection.brewery.getImages()})
            ), 
            React.createElement("div", {className: "brewery_details"}, 
              React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Website:"), React.createElement("span", null, " ", model.get("website"))), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Established:"), React.createElement("span", null, " ", model.get("established"))), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Location Type:"), React.createElement("span", null, " ", model.get("locationTypeDisplay"))), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Address:"), React.createElement("span", null, " ", model.get("streetAddress"))), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "City, State, Zip:"), React.createElement("span", null, " ", model.get("locality"), ", ", model.get("region"), " ", model.get("postalCode"))), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Country:"), React.createElement("span", null, " ", model.get("countryIsoCode"))), 
                React.createElement("li", null, React.createElement("span", {className: "bold"}, "Phone:"), React.createElement("span", null, " ", model.get("phone")))
              )
            ), 
            React.createElement("div", {className: "description"}, 
              React.createElement("span", {className: "bold"}, "Brewery Description:"), React.createElement("span", null, " ", model.collection.brewery.get("description"))
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

  views.FavoriteBeers = React.createBackboneClass({
    getFavoriteBeers: function(model) {
      return (
          React.createElement("div", {className: "beer_name"}, 
            React.createElement("h3", null, model.get("name")), 
            React.createElement("div", {className: "user_beer description"}, 
              React.createElement("div", null, model.get("description")), 
              React.createElement("div", null, React.createElement("span", {className: "bold"}, "ABV:"), " ", model.get("abv")), 
              React.createElement("div", null, React.createElement("span", {className: "bold"}, "Style:"), " ", model.get("style").shortName, 
                   React.createElement("p", null, model.get("style").description)
              )
            )
          )
      );
    },

    render: function(){
      return(
        React.createElement("div", null, 
          React.createElement("h2", null, "Favorited Beers"), 
          React.createElement("div", null, 
          this.props.collection.map(this.getFavoriteBeers)
          )
        )
      )
    }
  });

  views.FavoritesSection = React.createBackboneClass({
    render: function(){
      return(
        React.createElement("div", {className: "users"}, 
          React.createElement("div", {className: "user_left"}, 
            React.createElement("h2", null, "Favorite Beers"), 
              React.createElement(views.FavoriteBeers, null)
          )
        )
      )
    }
  });


})(tiy.views);
(function(views){

  views.Footer = React.createBackboneClass({

    render: function(){
      return (
        React.createElement("div", {className: "footer-wrapper"}, 
          React.createElement("div", {className: "footer-nav"}, 
            React.createElement("span", null, React.createElement("a", {href: "http://katherinetrammell.me/"}, React.createElement("img", {src: "images/bee.svg", alt: "portfolio"}), "Like this site? Click here to find out more about the creator"))
          )
        )
      );
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

    favoriteBeers: function(e) {
      e.preventDefault();
      this.props.onshowFavoriteBeers();
    },

    render: function(){
      return (
        React.createElement("div", {className: "header-wrapper"}, 
          React.createElement("div", {className: "header-upper"}, 
            React.createElement("div", {className: "logo"}, 
              React.createElement("a", {href: "#"}, React.createElement("img", {src: "images/BreweryBeeLogo4.svg", alt: "Brewery Bee"}))
            ), 
            React.createElement("div", {className: "login"}, 
              React.createElement("div", null, 
               React.createElement(views.TwitterLogin, {model: this.props.model})
              )
            )
          ), 
          React.createElement("div", {className: "header-nav"}, 
            React.createElement("ul", {className: "primary-nav"}, 
              React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.beerList}, "Find a Beer")
              ), 
              React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.breweryList}, "Find a Brewery")), 
              React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.styles}, "Beer Styles")), 
              React.createElement(views.FavoriteNavItem, {onclick: this.favoriteBeers})
            )
          )
        )
      );
    }
  });

  views.FavoriteNavItem = React.createClass({displayName: "FavoriteNavItem",

    render: function() {
      if (tiy.isLoggedIn()) {
        return React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.props.onclick}, "Favorites"))  
      } else {
        return null;
      };        
    }
  });

})(tiy.views);
// --------- HOME PAGE VIEW --------- //

(function(views){


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
            React.createElement("div", {className: "image"}, 
              React.createElement("a", {href: "#", onClick: this.beerList}, 
                React.createElement("img", {src: "images/beer2.jpg", alt: "beer names"}), 
                React.createElement("h3", null, "Find a Beer")
              )
            ), 
            React.createElement("div", {className: "image"}, 
              React.createElement("a", {href: "#", onClick: this.breweryList}, 
                React.createElement("img", {src: "images/beer_bottles.jpg", alt: "brewery names"}), 
                React.createElement("h3", null, "Find a Brewery")
              )
            ), 
            React.createElement("div", {className: "image"}, 
              React.createElement("a", {href: "#", onClick: this.categoryList}, 
                React.createElement("img", {src: "images/beer4.jpg", alt: "beer category"}), 
                React.createElement("h3", null, "Learn about Beer Styles")
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
          React.createElement("div", null, 
            React.createElement("h2", null, "About Brewery Bee"), 
            React.createElement("p", null, "Brewery Bee came in a stroke of inspiration as I sat in a bar listening to my husband ask the bartender question after question about the beer choices they offer. Do you have any IPAs? What does that beer taste like?  Fruit taste, how fruity? Is that a dark beer?  Is that a local beer? What local beers do you have? The questions can just keep going on and on.  The idea behind Brewery Bee was to create an application that would help beer enthusiasts to find information on the beers they never knew existed, would love to try, and the beers they already love. "), 
            React.createElement("p", null, "Brewery Bee also has the added feature of allowing beer lovers log in and save their favorite beers so they never have to worry about forgetting them as they continue to expand their beer pallet.")
          ), 
          React.createElement(views.HomeImages, {
            onShowBeers: this.props.onShowBeers, 
            onShowBreweries: this.props.onShowBreweries, 
            onShowCategories: this.props.onShowCategories, 
            onShowLocations: this.props.onShowLocations})
        )
      );
    }
  });

})(tiy.views);
// ------------ Beer and Brewery Lists ------------ //
(function(views){

  views.Search = React.createBackboneClass({
    handleSubmit: function(e) {
      e.preventDefault();
      var q = this.refs.q.getDOMNode().value;
      this.props.onSearch(q);
    },

    render: function() {
      return (
          React.createElement("div", {className: "search"}, 
            React.createElement("form", {className: "search-form", action: "", method: "", onSubmit: this.handleSubmit}, 
              React.createElement("span", null), 
              React.createElement("input", {ref: "q", type: "text", className: "search-field", name: "q", placeholder: "Enter Search Words"}), 
              React.createElement("input", {type: "submit", className: "search-button"})
            )
          )
        )
    }
  }),
//Beer List information
    
  views.BeerListView = React.createBackboneClass({

    getInitialState: function() {
      return { searchResults: this.props.collection };
    },

    getBeer: function(model) {
      return (
        React.createElement("tr", null, 
          React.createElement("td", null, React.createElement("a", {"data-beer-id": model.get("id"), href: "#", onClick: this.beerDetail}, model.get("name"))), 
          React.createElement("td", null, model.styleName()), 
          React.createElement("td", null, model.breweryNames())
        )
      );
    },

    beerDetail: function(e) {
      e.preventDefault();
      var beerId = $(e.target).attr("data-beer-id");
      // console.log(e.target, e.target.href);
      this.props.onShowBeerDetail(beerId);
    },

    performSearch: function(query) {

      var url = "/api/search?type=beer&withBreweries=Y&q=" + query;

      $.getJSON(url, function(results){
        // console.log(url);
        this.setState({searchResults: new tiy.models.Beers(results.data)});
      }.bind(this));
    },

    render: function(){
      return(
        React.createElement("div", {className: "list_views"}, 
          React.createElement(views.Search, {onSearch: this.performSearch}), 
          React.createElement("div", {className: "beer_list brewery_list"}, 
            React.createElement("h2", null, "Beer List"), 
              React.createElement("table", null, 
                React.createElement("thead", null, 
                  React.createElement("th", null, "Name"), 
                  React.createElement("th", null, "Style"), 
                  React.createElement("th", null, "Brewery")
                ), 
                React.createElement("tbody", null, 
                  this.state.searchResults.map(this.getBeer)
                )
              )
          )
        )
      )
    }
  });

//Beer List information
  views.BreweryListView = React.createBackboneClass({

    getInitialState: function() {
      return { searchResults: this.props.collection };
    },

    getBrewery: function(model) {
      return (
        React.createElement("tr", null, 
          React.createElement("td", null, React.createElement("a", {"data-brewery-id": model.get("id"), href: "#", onClick: this.breweryDetail}, model.get("name"))), 
          React.createElement("td", null, React.createElement("img", {className: "brewery_image", src: model.getImages()}))
        )
      );
    },

    breweryDetail: function(e) {
      e.preventDefault();
      var breweryId = $(e.target).attr("data-brewery-id");
      console.log(e.target, e.target.href);
      this.props.onShowBreweryDetail(breweryId);
    },

    performSearch: function(query) {

      var url = "/api/search?type=brewery&q=" + query;

      $.getJSON(url, function(results){
        // do something with results
        // console.log(results);
        this.setState({searchResults: new tiy.models.Breweries(results.data)});
      }.bind(this));
    },

    render: function(){
      return(
        React.createElement("div", null, 
          React.createElement("div", {className: "list_views"}, 
            React.createElement(views.Search, {onSearch: this.performSearch}), 
            React.createElement("div", {className: "beer_list brewery_list"}, 
              React.createElement("h2", null, "Brewery List"), 
                React.createElement("table", null, 
                  React.createElement("thead", null, 
                    React.createElement("th", null, "Name"), 
                    React.createElement("th", null, "Logo")
                  ), 
                  React.createElement("tbody", null, 
                    this.state.searchResults.map(this.getBrewery)
                  )
                )
              )
          )
        )
      )
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
          React.createElement("div", {className: "style_desc"}, React.createElement("p", null, model.get("description")))
        )
      );
    },

    render: function(){
      return (
        React.createElement("div", null, 
          React.createElement("div", null, 
            React.createElement("h2", null, "Beer Styles"), 
            React.createElement("p", null, " Love beer but not sure what styles of beers are out there? Check out our style list to learn more about the beers you love.")
          ), 
          React.createElement("div", null, 
            this.props.collection.map(this.getStyle)
          )
        )
      );
    }
  });




})(tiy.views);