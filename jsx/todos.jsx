(function(views){

  var Notes = React.createBackboneClass({

    makeLI: function(model, index){
      return <li key={index}>{model.get("note")}</li>;
    },

    render: function(){
      if (this.props.collection){
        return (
          <ul>
            {this.props.collection.map(this.makeLI)}
          </ul>
        );
      } else {
        return (
          <ul>
            <li>Nothing to show</li>
          </ul>
          );
       }
     }

  });

  views.Notes = Notes;
  
})(app.views);

//this is going to be stored as backbone collection and firebase collection