// --------- STYLES PAGE VIEW --------- //

(function(views){


  views.Map = React.createClass({
    render: function(){
      return (
        <div className="location">
          <h2>Brewery by Location</h2>
          <div className="map">
            <img src="images/Blank_US_map_borders.svg" alt="Satellite View of Earth" />
          </div>
        </div>
      );
    }
  });

  views.LocationList = React.createBackboneClass({
    getLocation: function(model) {
      return (
        <div className="location_list">
          <ul>
            <li>{model.get("region")}</li>
          </ul>
        </div>
      );
    },

    render: function(){
      return (
        <div>
          {this.props.collection.map(this.getLocation)}
        </div>
      );
    }
  });


})(tiy.views);