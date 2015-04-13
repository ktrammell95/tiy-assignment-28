(function(views){

  views.FavoriteBeers = React.createBackboneClass({
    getFavoriteBeers: function(model) {
      return (
          <div className="beer_name">
            <h3>{model.get("name")}</h3>
            <div className="user_beer">
              <ul>
                <li>{model.get("description")}</li>
                <li><span className="bold">ABV:</span> {model.get("abv")}</li>
                <li><span className="bold">Food Pairings:</span> {model.get("foodPairings")}</li>
              </ul>
              <ul>
                <li><span className="bold">Style:</span> {model.get("style").shortName}
                    <p>{model.get("style").description}</p>
                </li>
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