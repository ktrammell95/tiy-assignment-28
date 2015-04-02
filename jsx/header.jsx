(function(views){

  views.Header = React.createBackboneClass({
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
            <li><a href="#">Home</a></li>
            <li>Find a Beer
              <ul className="secondary-nav">
                  <li><a href="#">List by Name</a></li>
                  <li><a href="#">List by Style</a></li>
              </ul>
            </li>
            <li>Find a Brewery
              <ul className="secondary-nav">
                <li><a href="#">List by Name</a></li>
                <li><a href="#">List by Location</a></li>
              </ul>
            </li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">User Account</a></li>
          </ul>
          </div>
        </div>
      );
    }
  });

})(tiy.views);