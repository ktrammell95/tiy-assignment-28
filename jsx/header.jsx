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
        <div className="header-wrapper">
          <div className="header-upper">
            <div className= "logo">
              <a href="#"><img src="images/BreweryBeeLogo4.svg" alt="Brewery Bee"/></a>
            </div>
            <div className="login">
              <div>
               <views.TwitterLogin model={this.props.model}/>
              </div>
            </div>
          </div>
          <div className="header-nav">
            <ul className="primary-nav">
              <li><a href="#" onClick={this.beerList}>Find a Beer</a>
              </li>
              <li><a href="#" onClick={this.breweryList}>Find a Brewery</a></li>
              <li><a href="#" onClick={this.styles}>Beer Styles</a></li>
              <views.FavoriteNavItem onclick={this.favoriteBeers} />
            </ul>
          </div>
        </div>
      );
    }
  });

  views.FavoriteNavItem = React.createClass({

    render: function() {
      if (tiy.isLoggedIn()) {
        return <li><a href="#" onClick={this.props.onclick}>Favorites</a></li>  
      } else {
        return null;
      };        
    }
  });

})(tiy.views);