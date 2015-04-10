// ------------ Beer and Brewery Lists ------------ //
(function(views){

//Beer List information
    
  views.BeerListView = React.createBackboneClass({

    getBeer: function(model) {
      return (
        <tr>
          <td><a data-beer-id={model.get("id")} href="#" onClick={this.beerDetail}>{model.get("name")}</a></td>
          <td>{model.styleShortName()}</td>
          <td>{model.availabilityName()}</td>
        </tr>
      );
    },

    beerDetail: function(e) {
      e.preventDefault();
      var beerId = $(e.target).attr("data-beer-id");
      // console.log(e.target, e.target.href);
      this.props.onShowBeerDetail(beerId);
    },

    render: function(){
      return(
        <div className="list_views">
          <views.AlphabetList/>
          <div className="beer_list brewery_list">
            <h2>Beer List</h2>
              <table>
                <thead>
                  <th>Name</th>
                  <th>Style</th>
                  <th>Availability</th>
                </thead>
                <tbody>
                  {this.props.collection.map(this.getBeer)}
                </tbody>
              </table>
          </div>
        </div>
      )
    }
  });

//Beer List information
  views.BreweryListView = React.createBackboneClass({
    getBrewery: function(model) {
      return (
        <tr>
          <td><a data-brewery-id={model.get("id")} href="#" onClick={this.breweryDetail}>{model.get("name")}</a></td>
          <td><img src={model.getImages()}/></td>
        </tr>
      );
    },

    breweryDetail: function(e) {
      e.preventDefault();
      var breweryId = $(e.target).attr("data-brewery-id");
      // console.log(e.target, e.target.href);
      this.props.onShowBreweryDetail(breweryId);
    },

    render: function(){
      return(
        <div>
          <div className="list_views">
            {/*<views.AlphabetList/>*/}
          </div>
          <div className="beer_list brewery_list">
            <h2>Brewery List</h2>
              <table>
                <thead>
                  <th>Logo</th>
                  <th>Name</th>
                </thead>
                <tbody>
                  {this.props.collection.map(this.getBrewery)}
                </tbody>
              </table>
          </div>
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
            <li><a href="number">#</a></li>
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

})(tiy.views);