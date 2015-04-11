// --------- HOME PAGE VIEW --------- //

(function(views){


  views.About = React.createClass({
    render: function(){
      return (
          <div>
            <h2>About Brewery Bee</h2>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
          </div>
      );
    }
  });

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
          <views.About/>
          <views.HomeImages 
            onShowBeers={this.props.onShowBeers}
            onShowBreweries={this.props.onShowBreweries}
            onShowCategories={this.props.onShowCategories}
            onShowLocations={this.props.onShowLocations}/>
        </div>
      );
    }
  });

  views.Section = React.createClass({

    render: function(){
      return (
          <views.Home/>
      );
    }
  });

})(tiy.views);