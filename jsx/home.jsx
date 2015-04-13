// --------- HOME PAGE VIEW --------- //

(function(views){


  views.HomeImages = React.createClass({

    beerList: function(e) {
      // console.log("beerList");
      e.preventDefault();
      this.props.onShowBeers();
    },

    categoryList: function(e) {
      // console.log("categoryList");
      e.preventDefault();
      this.props.onShowCategories();
    },

    breweryList: function(e) {
      // console.log("breweryList");
      e.preventDefault();
      this.props.onShowBreweries();
    },

    locationList: function(e) {
      // console.log("locationList");
      e.preventDefault();
      this.props.onShowLocations();
    },

    render: function(){
      return (
          <div className="images">
            <div className="image">
              <a href="#" onClick={this.beerList}>
                <img src="images/beer2.jpg" alt="beer names" />
                <h3>Find a Beer</h3>
              </a>
            </div>
            <div className="image">
              <a href="#" onClick={this.breweryList}>
                <img src="images/beer_bottles.jpg" alt="brewery names" />
                <h3>Find a Brewery</h3>
              </a>
            </div>
            <div className="image">
              <a href="#" onClick={this.categoryList}>
                <img src="images/beer4.jpg" alt="beer category" />
                <h3>Learn about Beer Styles</h3>
              </a>
            </div>
            {/*<div className="image_right">
              <a href="#" onClick={this.locationList}>
                <img src="images/beer3.jpg" alt="brewery locations" />
                Brewery Locations
              </a>
            </div>*/}
          </div>
      );
    }
  });

  views.Home = React.createClass({
    render: function(){
      // window.x = this;
      return (
        <div className="index">
          <div>
            <h2>About Brewery Bee</h2>
            <p>Brewery Bee came in a stroke of inspiration as I sat in a bar listening to my husband ask the bartender question after question about the beer choices they offer. Do you have any IPAs? What does that beer taste like?  Fruit taste, how fruity? Is that a dark beer?  Is that a local beer? What local beers do you have? The questions can just keep going on and on.  The idea behind Brewery Bee was to create an application that would help beer enthusiasts to find information on the beers they never knew existed, would love to try, and the beers they already love. </p>
            <p>Brewery Bee also has the added feature of allowing beer lovers log in and save their favorite beers so they never have to worry about forgetting them as they continue to expand their beer pallet.</p>
          </div>
          <views.HomeImages 
            onShowBeers={this.props.onShowBeers}
            onShowBreweries={this.props.onShowBreweries}
            onShowCategories={this.props.onShowCategories}
            onShowLocations={this.props.onShowLocations}/>
        </div>
      );
    }
  });

})(tiy.views);