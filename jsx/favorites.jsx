(function(views){

  views.FavoriteBeers = React.createBackboneClass({
    getFavoriteBeers: function(model) {
      return (
          <div className="beer_name">
            <h3>{model.get("name")}</h3>
            <div className="user_beer">
              <ul>
                <li>{model.get("description")}</li>
                <li>ABV: {model.get("abv")}</li>
                <li>Food Pairings: {model.get("foodPairings")}</li>
                <li>Style: {model.get("style").shortName}</li>
                <li>Style Description:<p>{model.get("style").description}</p></li>
              </ul>
            </div>
          </div>
      );
    },

    render: function(){
      return(
        <div>
          <h2>Favorited Beers</h2>
          <div>
          {this.props.collection.map(this.getFavoriteBeers)}
          </div>
        </div>
      )
    }
  });

//Brewery Detail Information
  views.BreweryFavorites = React.createBackboneClass({
    render: function(){
      return (
          <div className="brewery_name">
          <h3>3 Daughters Brewing</h3>
          <div className="brewery_image">
            <img src="http://lorempixel.com/100/100/" />
          </div>
          <div className="user_brewery">
            <ul>
              <li>Address</li>
              <li>Address</li>
              <li>Phone</li>
              <li>Website</li>
            </ul>
          </div>
        </div>
      );
    }
  });

  views.FavoritesSection = React.createBackboneClass({
    render: function(){
      return(
        <div className="users">
          <div className="user_left">
            <h2>Favorite Beers</h2>
              <views.FavoriteBeers/>
          </div>
        </div>
      )
    }
  });


})(tiy.views);