(function(views){



  views.Header = React.createBackboneClass({

    homeClickHandler: function(e){
      console.log('home');
      e.preventDefault();
      this.props.onRoute(home);
    },

    beerList: function(e) {
      console.log('beer list');
    },

    styleList: function() {
    console.log('style list');
    },

    breweryList: function() {
    console.log('brewery list');
    },

    locationList: function() {
    console.log('location list');
    },

    resources: function() {
    console.log('resources');
    },

    userAccount: function() {
    console.log('userAccount');
    },

    render: function(){
      return (
        <div className="header-wrapper">
          <div className="header-upper">
            <div className= "logo">
              <img src="images/BreweryBeeLogo4.svg" alt="Brewery Bee"/>
            </div>
            <div className="login">
              <div>
               <views.TwitterLogin model={this.props.model}/>
              </div>
            </div>
          </div>
          <div className="header-nav">
            <ul className="primary-nav">
            <li><a href="#" onClick={this.homeClickHandler}>Home</a></li>
            <li>Find a Beer
              <ul className="secondary-nav">
                  <li><a href="#" onClick={this.beerList}>List by Name</a></li>
                  <li><a href="#" onClick={this.styleList}>List by Style</a></li>
              </ul>
            </li>
            <li>Find a Brewery
              <ul className="secondary-nav">
                <li><a href="#" onClick={this.breweryList}>List by Name</a></li>
                <li><a href="#" onClick={this.locationList}>List by Location</a></li>
              </ul>
            </li>
            <li><a href="#" onClick={this.resources}>Resources</a></li>
            <li><a href="#" onClick={this.userAccount}>User Account</a></li>
          </ul>
          </div>
        </div>
      );
    }
  });

})(tiy.views);