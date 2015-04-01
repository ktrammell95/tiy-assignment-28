// --------- STYLES PAGE VIEW --------- //

(function(views){


  views.Styles = React.createClass({
    render: function(){
      return (
        <div className="styles">
          <h2>Beer Styles</h2>
          <div className="images">
            <div className="image_left">
              <img src="http://placehold.it/350x150" alt="American Amber / Red Ale" />
              <a href="#">American Amber / Red Ale</a>
            </div>
            <div className="image_right">
              <img src="http://placehold.it/350x150" alt="American Barleywine" />
              <a href="#">American Barleywine</a>
            </div>
            <div className="image_left">
              <img src="http://placehold.it/350x150" alt="American Black Ale" />
              <a href="#">American Black Ale</a>
            </div>
            <div className="image_right">
              <img src="http://placehold.it/350x150" alt="American Blonde Ale" />
              <a href="#">American Blonde Ale</a>
            </div>
          </div>
        </div>
      );
    }
  });

  views.StyleList = React.createClass({
    render: function(){
      return (
        <div className="style_list">
          <ul>
            <li><a href="American Amber / Red Ale">American Amber / Red Ale</a></li>
            <li><a href="American Barleywine">American Barleywine</a></li>
            <li><a href="American Black Ale">American Black Ale</a></li>
            <li><a href="American Blonde Ale">American Blonde Ale</a></li>
          </ul>
        </div>
      );
    }
  });

  views.Section = React.createClass({
    render: function(){
      return(
        <div className="style_view">
          <views.Search/>
          <views.StyleList/>
          <views.Styles/>
        </div>
      )
    }
  });



})(tiy.views);