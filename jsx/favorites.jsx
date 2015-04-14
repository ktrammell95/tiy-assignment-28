(function(views){

  views.FavoriteBeers = React.createBackboneClass({
    getFavoriteBeers: function(model) {
      return (
          <div className="beer_name">
            <h3>{model.get("name")}</h3>
            <div className="user_beer description">
              <div>{model.get("description")}</div>
              <div><span className="bold">ABV:</span> {model.get("abv")}</div>
              <div><span className="bold">Style:</span> {model.get("style").shortName}
                   <p>{model.get("style").description}</p>
              </div>
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