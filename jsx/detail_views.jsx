(function(views){

  views.BeerDetail = React.createClass({
    getBeerDetail: function(model) {
      return (
        <div className="beer">
          <h3>{model.get("name")}</h3>
          <div className="beer_details">
            <ul>
              <li>Description: {model.get("description")}</li>
              <li>ABV:{model.get("abv")}</li>
              <li>Glassware:{model.get("glass")}</li>
              <li>Style:{model.get("style")}</li>
            </ul>
          </div>
          <div className="beer_image">
            <img src="{model.get('labels')}"/>
          </div>
        </div>
      );
    },
    render: function(){
      return(
        <div>
          {this.props.collection.map(this.getBeerDetail)}
        </div>
      )
    }
  });

//Brewery Detail Information
  views.BreweryLocation = React.createBackboneClass({
    getBreweryLocation: function(model) {
          return (
          <div>  
            <h3>{model.get("name")}</h3>
            <div className="brewery_details">
              <ul>
                <li>{model.get("locality")}</li>
                <li>{model.get("countryIsoCode")}</li>
                <li>{model.get("phone")}</li>
                <li>Website</li>
              </ul>
            </div>
            <div className="brewery_image">
              <img src="http://lorempixel.com/400/200/" />
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