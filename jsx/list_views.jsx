// ------------ Beer and Brewery Lists ------------ //
(function(views){

//Beer List information
  views.BeerList = React.createClass({
    render: function(){
      return(
        <div className="beer_list brewery_list">
            <table>
              <thead>
                <th>Name</th>
                <th>Brewery</th>
                <th>Style</th>
              </thead>
              <tbody>
                <tr>
                  <td>Saison Lafayette</td>
                  <td>Two Sisters</td>
                  <td>IPA</td>
                </tr>
              </tbody>
            </table>
        </div>
      )
    }
  });

//Beer List information
  views.BreweryList = React.createClass({
    render: function(){
      return(
        <div className="beer_list brewery_list">
            <table>
              <thead>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
              </thead>
              <tbody>
                <tr>
                  <td>Two Sisters</td>
                  <td>St. Petersburg</td>
                  <td>Florida</td>
                </tr>
              </tbody>
            </table>
        </div>
      )
    }
  });


  views.Search = React.createClass({
    render: function(){
      return (
        <div className="search">
          <form className="search-form" action="" method="">
            <span></span>
            <input type = "text" className="search-field" name="search" placeholder="enter keywords"/>
            <input type = "submit" className = "search-button" name="submit"value="Search"/>
          </form>
        </div>
      )
    }
  });
  
  views.AlphabetList = React.createClass({
    render: function(){
      return (
        <div className="alphabet">
          <ul>
            <li><a href="A">A</a></li>
            <li><a href="B">B</a></li>
            <li><a href="C">C</a></li>
            <li><a href="D">D</a></li>
            <li><a href="E">E</a></li>
            <li><a href="F">F</a></li>
            <li><a href="G">G</a></li>
            <li><a href="H">H</a></li>
            <li><a href="I">I</a></li>
            <li><a href="J">J</a></li>
            <li><a href="K">K</a></li>
            <li><a href="L">L</a></li>
            <li><a href="M">M</a></li>
            <li><a href="N">N</a></li>
            <li><a href="O">O</a></li>
            <li><a href="P">P</a></li>
            <li><a href="Q">Q</a></li>
            <li><a href="R">R</a></li>
            <li><a href="S">S</a></li>
            <li><a href="T">T</a></li>
            <li><a href="U">U</a></li>
            <li><a href="V">V</a></li>
            <li><a href="W">W</a></li>
            <li><a href="X">X</a></li>
            <li><a href="Y">Y</a></li>
            <li><a href="Z">Z</a></li>
          </ul>
        </div>
      );
    }
  });


  views.BeerListView = React.createClass({
    render: function(){
      return(
        <div className="list_views">
          <views.Search/>
          <views.AlphabetList/>
          <views.BeerList/>
        </div>
      )
    }
  });

  //   views.BreweryListView = React.createClass({
  //   render: function(){
  //     return(
  //       <div className="list_views">
  //         <views.Search/>
  //         <views.AlphabetList/>
  //         <views.BreweryList/>
  //       </div>
  //     )
  //   }
  // });

  views.Section = React.createClass({
    render: function(){
      return(
        <views.BeerListView/>
      )
    }
  });


})(tiy.views);