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
    render: function(){
      return (
          <div className="images">
            <div className="image_left">
              <img src="images/beer2.jpg" alt="brewery" />
              <a href="#">Beer Name</a>
            </div>
            <div className="image_right">
              <img src="images/beer4.jpg" alt="brewery" />
              <a href="#">Beer Style</a>
            </div>
            <div className="image_left">
              <img src="images/beer_bottles.jpg" alt="brewery" />
              <a href="#">Brewery Name</a>
            </div>
            <div className="image_right">
              <img src="images/beer3.jpg" alt="brewery" />
              <a href="#">Brewery Location</a>
            </div>
          </div>
      );
    }
  });

  views.Home = React.createClass({
    render: function(){
      return (
        <div className="index">
          <views.About/>
          <views.HomeImages/>
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