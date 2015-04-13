(function(views){

  views.Footer = React.createBackboneClass({

    render: function(){
      return (
        <div className="footer-wrapper">
          <div className="footer-nav">
            <span><a href="http://katherinetrammell.me/"><img src="images/bee.svg" alt="portfolio" />Like this site? Click here to find out more about the creator</a></span>
          </div>
        </div>
      );
    }
  });

})(tiy.views);