// --------- STYLES PAGE VIEW --------- //

(function(views){

  views.StyleList = React.createBackboneClass({
    getStyle: function(model) {
      return (
        <div className="style_list">
          <h3 className="style_name">{model.get("name")}</h3>
          <div className="style_desc">{model.get("description")}</div>
        </div>
      );
    },

    render: function(){
      return (
        <div>
          {this.props.collection.map(this.getStyle)}
        </div>
      );
    }
  });




})(tiy.views);