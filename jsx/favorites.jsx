(function(views){

  views.UserBeerDetail = React.createClass({
    render: function(){
      return(
        <div className="beer_name">
          <h3>Saison Lafayette</h3>
          <div className="beer_image">
            <img src="http://lorempixel.com/100/100/"/>
          </div>
          <div className="user_beer">
            <ul>
              <li>Description:</li>
              <li>Rating:</li>
              <li>ABV:</li>
              <li>Glassware:</li>
              <li>Style:</li>
            </ul>
          </div>
        </div>
      )
    }
  });

//Brewery Detail Information
  views.UserBreweryDetail = React.createBackboneClass({
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

  views.UserSection = React.createClass({
    render: function(){
      return(
        <div className="users">
          <div className="user_left">
            <h2>Beers</h2>
            <views.UserBeerDetail/>
          </div>
          <div className="user_right">
            <h2>Breweries</h2>
            <views.UserBreweryDetail/>
          </div>
        </div>
      )
    }
  });


})(tiy.views);