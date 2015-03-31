(function(views){

  views.Header = React.createBackboneClass({
    render: function(){
      return (
        <div className="header-wrapper">
          <div className="header-upper">
            <div className= "logo">
              <h1>Brewery Bee</h1>
            </div>
            <div className="login">
              <div>
               <views.TwitterLogin model={this.props.model}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

})(tiy.views);