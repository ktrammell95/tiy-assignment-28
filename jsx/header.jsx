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
              <img src="images/BreweryBeeLogo4.svg" alt="Brewery Bee"/>
            </div>
            <div className="login">
              <div>
               <views.TwitterLogin model={this.props.model}/>
              </div>
            </div>
          </div>
          <div className="header-nav">
            <ul className="primary-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#" onClick={this.beerList}>Find a Beer</a>
            </li>
            <li><a href="#" onClick={this.breweryList}>Find a Brewery</a></li>
            <li><a href="#" onClick={this.styles}>Beer Styles</a></li>
            <li><a href="#" onClick={this.favoriteBeers}>Favorites</a></li>
          </ul>
          </div>
        </div>
      );
    }
  });

})(tiy.views);