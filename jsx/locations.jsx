// --------- STYLES PAGE VIEW --------- //

(function(views){


  views.Map = React.createClass({
    render: function(){
      return (
        <div className="location">
          <h2>Brewery by Location</h2>
          <div className="map">
            <img src="images/earth.jpg" alt="Satellite View of Earth" />
          </div>
        </div>
      );
    }
  });

  views.LocationList = React.createClass({
    render: function(){
      return (
        <div className="location_list">
          <ul>
            <li><a href="#">Location 1</a></li>
            <li><a href="#">Location 2</a></li>
            <li><a href="#">Location 3</a></li>
            <li><a href="#">Location 4</a></li>
          </ul>
        </div>
      );
    }
  });



  views.Section = React.createClass({
    render: function(){
      return(
        <div className="location_view">
          <views.Search/>
          <views.LocationList/>
          <views.Map/>
        </div>
      )
    }
  });



})(tiy.views);