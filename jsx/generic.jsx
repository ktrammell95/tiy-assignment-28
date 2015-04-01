(function(views){

  views.Icon = React.createClass({

    render: function() {
      //create font awesome class
      var cssClass= "fa fa-" + this.props.fa;
      //add spin effect
      if (this.props.spin){
        cssClass += " fa-spin";
      }
      return <i className={cssClass}/>
    }

  });

  views.Toggle = React.createClass({
    render: function() {
     var icon = this.props.on ? "toggle-on" : "toggle-off";
      return(
        <div className="toggle" onClick={this.props.onToggle}>
          <views.Icon fa={icon}/>
        </div>
      );
    }
  });

  views.DeleteButton = React.createClass({
    onClick: function(e){
      e.preventDefault();
      e.stopPropagation();
      if(this.props.confirm){
        var confirmed = confirm(this.props.confirm);
        if(!confirmed){
          return;
        }
      }
      this.props.onDelete();
    },

    render: function(){
      return(
        <div className="delete-btn" onClick={this.onClick}>
          <views.Icon fa="remove"/>
        </div>
      );
    }
  });

  views.Breadcrumbs = React.createBackboneClass({

    onLinkClick: function(route, e){
      e.preventDefault();
      this.props.onRoute(route);
    },

    build: function(){
      return (this.props.data || []).map(function(crumb, index){
        return (
          <a 
          href="#" 
          key={index} 
          onClick={this.onLinkClick.bind(this, crumb.route)}>
            {crumb.title}
          </a>
        );
      }, this);
    },

    render: function(){
      if( !tiy.isLoggedIn() ){
        return <div/>;
      } 
        return (
          <div className="breadcrumbs">
            {this.build()}
          </div>
        );
      }
  });

})(tiy.views);