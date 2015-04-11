// --------- STYLES PAGE VIEW --------- //

(function(views){

  views.StyleList = React.createBackboneClass({
    getStyle: function(model) {
      return (
        <div className="style_list">
          <h3 className="style_name">{model.get("name")}</h3>
          <div className="style_desc"><p>{model.get("description")}</p></div>
        </div>
      );
    },

    render: function(){
      return (
        <div>
          <div>
            <h2>Beer Styles</h2>
            <p> Love beer but not sure what styles of beers are out there?</p>
            <p>Check out our style list to learn more about the beers you love.</p>
          </div>
          <div>
            {this.props.collection.map(this.getStyle)}
          </div>
        </div>
      );
    }
  });




})(tiy.views);