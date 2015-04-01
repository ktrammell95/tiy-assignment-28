(function(views){

  views.BeerDetail = React.createClass({
    render: function(){
      return(
        <div className="beer">
          <h3>Beer: Saison Lafayette</h3>
          <div className="beer_details">
            <ul>
              <li>Description:</li>
              <li>ABV:</li>
              <li>Glassware:</li>
              <li>Style:</li>
            </ul>
          </div>
          <div className="beer_image">
            <img src="http://lorempixel.com/400/200/"/>
          </div>
        </div>
      )
    }
  });

//Brewery Detail Information
  views.Brewery = React.createBackboneClass({
    render: function(){
      return (
          <div className="brewery">
          <h3>Brewery: 3 Daughters Brewing</h3>
          <div className="brewery_details">
            <ul>
              <li>Address</li>
              <li>Address</li>
              <li>Phone</li>
              <li>Website</li>
            </ul>
          </div>
          <div className="brewery_image">
            <img src="http://lorempixel.com/400/200/" />
          </div>
        </div>
      );
    }
  });


})(tiy.views);