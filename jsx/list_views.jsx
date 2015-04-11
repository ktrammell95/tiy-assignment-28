// ------------ Beer and Brewery Lists ------------ //
(function(views){

//Beer List information
    
  views.BeerListView = React.createBackboneClass({

    getBeer: function(model) {
      return (
        <tr>
          <td><a data-beer-id={model.get("id")} href="#" onClick={this.beerDetail}>{model.get("name")}</a></td>
          <td>{model.styleName()}</td>
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
            <p>Select a beer by name or use filter the list by the first letter of the name</p>
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
      console.log(e.target, e.target.href);
      this.props.onShowBreweryDetail(breweryId);
    },

    render: function(){
      return(
        <div>
          <div className="list_views">
            <views.AlphabetList/>
            <div className="beer_list brewery_list">
              <h2>Brewery List</h2>
              <p>Select a brewery by name or use filter the list by the first letter of the name</p>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>Logo</th>
                  </thead>
                  <tbody>
                    {this.props.collection.map(this.getBrewery)}
                  </tbody>
                </table>
              </div>
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

    alphabetSort: function(e) {
      e.preventDefault();
      console.log(e.target, e.target.href);

    },

    render: function(){
      return (
        <div className="alphabet">
          <ul>
            <li><a href="#" onClick={this.alphabetSort}>#</a></li>
            <li><a href="#" onClick={this.alphabetSort}>A</a></li>
            <li><a href="#" onClick={this.alphabetSort}>B</a></li>
            <li><a href="#" onClick={this.alphabetSort}>C</a></li>
            <li><a href="#" onClick={this.alphabetSort}>D</a></li>
            <li><a href="#" onClick={this.alphabetSort}>E</a></li>
            <li><a href="#" onClick={this.alphabetSort}>F</a></li>
            <li><a href="#" onClick={this.alphabetSort}>G</a></li>
            <li><a href="#" onClick={this.alphabetSort}>H</a></li>
            <li><a href="#" onClick={this.alphabetSort}>I</a></li>
            <li><a href="#" onClick={this.alphabetSort}>J</a></li>
            <li><a href="#" onClick={this.alphabetSort}>K</a></li>
            <li><a href="#" onClick={this.alphabetSort}>L</a></li>
            <li><a href="#" onClick={this.alphabetSort}>M</a></li>
            <li><a href="#" onClick={this.alphabetSort}>N</a></li>
            <li><a href="#" onClick={this.alphabetSort}>O</a></li>
            <li><a href="#" onClick={this.alphabetSort}>P</a></li>
            <li><a href="#" onClick={this.alphabetSort}>Q</a></li>
            <li><a href="#" onClick={this.alphabetSort}>R</a></li>
            <li><a href="#" onClick={this.alphabetSort}>S</a></li>
            <li><a href="#" onClick={this.alphabetSort}>T</a></li>
            <li><a href="#" onClick={this.alphabetSort}>U</a></li>
            <li><a href="#" onClick={this.alphabetSort}>V</a></li>
            <li><a href="#" onClick={this.alphabetSort}>W</a></li>
            <li><a href="#" onClick={this.alphabetSort}>X</a></li>
            <li><a href="#" onClick={this.alphabetSort}>Y</a></li>
            <li><a href="#" onClick={this.alphabetSort}>Z</a></li>
          </ul>
        </div>
      );
    }
  });

})(tiy.views);