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
        favButton = <a data-beer-id={b.id} className="btn btn-lg btn-success" href="#" onClick={this.checkFavorite}>
                  <i className="fa fa-beer fa-2x pull-left"></i>Remove Favorite</a>;
      } else {
        favButton = <a data-beer-id={b.id} className="btn btn-lg btn-success" href="#" onClick={this.checkFavorite}>
                  <i className="fa fa-beer fa-2x pull-left"></i>Add Favorite</a>;
      }

      return(
        <div>
          <div className="beer">
            <h2>{b.name}</h2>
            <div className="favButton">
              {favButton}
            </div>
            <div className="beer_details">
              <ul>
                <li><span className="bold">Description:</span><span> {b.description}</span></li>
                <li><span className="bold">ABV:</span><span> {b.abv}</span></li>
                <li><span className="bold">Glassware:</span><span> {(b.glass || {}).name}</span></li>
                <li><span className="bold">Availability:</span><span> {(b.available|| {}).description}</span></li>
                <li><span className="bold">Food Pairings:</span><span> {b.foodPairings}</span></li>
                <li><span className="bold">Style:</span><span> {(b.style|| {}).name}</span></li>
                <li><span className="bold">Style Description:</span><span> {(b.style|| {}).description}</span></li>
              </ul>
            </div>
            <div>
              <img src={(b.labels|| {}).medium}/>
            </div>
          </div>
        </div>
      )
    }
  });

//Brewery Detail Information
  views.BreweryLocation = React.createBackboneClass({
    getBreweryLocation: function(model) {
          return (
          <div>  
            <h2>{model.collection.brewery.get("name")}</h2>
            <div className="brewery_details">
              <ul>
                <li><span className="bold">Location Type:</span><span> {model.get("locationTypeDisplay")}</span></li>
                <li><span className="bold">Address:</span><span> {model.get("streetAddress")}</span></li>
                <li><span className="bold">City, State, Zip:</span><span> {model.get("locality")}, {model.get("region")} {model.get("postalCode")}</span></li>
                <li><span className="bold">Country:</span><span> {model.get("countryIsoCode")}</span></li>
                <li><span className="bold">Phone:</span><span> {model.get("phone")}</span></li>
                <li><span className="bold">Website:</span><span> {model.get("website")}</span></li>
              </ul>
            </div>
            <div>
              <img className="brewery_image" src={model.collection.brewery.getImages()}/>
            </div>
            <div className="description">
              <span className="bold">Brewery Description:</span><span> {model.collection.brewery.get("description")}</span>
            </div>
          </div>
          );
        },

    render: function(){
      return (
        <div className="brewery">
          {this.props.collection.map(this.getBreweryLocation)}
        </div>
      );
    }
  });


})(tiy.views);