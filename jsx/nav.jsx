// app.views={};

(function(views){

  var Chapters = React.createClass({
    render: function() {
      return <li>Chapters</li>
    }
  });

  var References = React.createClass({
    render: function() {
      return <li>References</li>
    }
  });

  var PgView = React.createClass({

    getView: function(show) {
      if (show === "chapters") {
        return <Chapters/>
      }
      else if (show === "references") {
        return <References/>
      }
    },

    onNav: function(show){
      this.props.onShow(show);
    },

    render: function() {
      var showing = this.getView(this.props.show);
      return (
        <ul>
          <li onClick={this.onNav.bind(this, "chapters")}>Chapters</li>
          <li onClick={this.onNav.bind(this, "references")}>References</li>
        </ul>
      )
    }
  });
// });
    views.PgView = PgView;
    views.Chapters = Chapters;
    views.References = References;


})(app.views);