// --------- STYLES PAGE VIEW --------- //

(function(views){


  views.Categories = React.createClass({
    render: function(model){
      return (
        <div className="styles">
          <h2>Beer Styles</h2>
          <div className="images">
            <div className="image_left">
              <img src="http://placehold.it/350x150" alt="American Amber / Red Ale" />
              <a href="#">{model.get("name")}</a>
            </div>
          </div>
        </div>
      );
    }
  });

  views.CategoryList = React.createClass({
    render: function(model){
      return (
        <div className="style_list">
          <ul>
            <li><a href="#">{model.get("name")}</a></li>
          </ul>
        </div>
      );
    }
  });

  views.CategoryListView = React.createClass({
    render: function(){
      return(
        <div className="style_view">
          <views.CategoryList/>
          <views.Categories/>
        </div>
      )
    }
  });

  views.Section = React.createClass({
    render: function(){
      return(
          <views.CategoryListView/>
      )
    }
  });



})(tiy.views);