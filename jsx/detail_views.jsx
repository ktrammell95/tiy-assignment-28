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
            <h3>{b.name}</h3>
            <div className="favButton">
              {favButton}
            </div>
            <div className="beer_details">
              <ul>
                <li>Description: {b.description}</li>
                <li>ABV: {b.abv}</li>
                <li>Glassware: {(b.glass || {}).name}</li>
                <li>Availability: {(b.available|| {}).name}</li>
                <li>Style: {(b.style|| {}).name}</li>
                <li>Style Description: {(b.style|| {}).description}</li>
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
            <h3>{model.collection.brewery.get("name")}</h3>
            <div className="brewery_details">
              <ul>
                <li>{model.get("locationTypeDisplay")}</li>
                <li>{model.get("streetAddress")}</li>
                <li>{model.get("locality")}, {model.get("region")} {model.get("postalCode")}</li>
                <li>{model.get("countryIsoCode")}</li>
                <li>{model.get("phone")}</li>
                <li>{model.get("website")}</li>
              </ul>
            </div>
            <div className="brewery_image">
              <img src={model.collection.brewery.getImages()}/>
            </div>
            <div className="description">
              <p>{model.collection.brewery.get("description")}</p>
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