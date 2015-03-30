(function(views){

  views.TwitterLoggedIn = React.createClass({displayName: "TwitterLoggedIn",

    render: function(){
      return (
        React.createElement("div", {className: "logged-in", onClick: tiy.logout.bind(tiy)}, 
          React.createElement("img", {className: "profile-image", src: this.props.img, alt: ""}), 
          " ", 
          React.createElement("span", null, this.props.name), 
          " ", 
          React.createElement(views.Icon, {fa: "sign-out"})
        )
      );
    }

  });//calling logout from tiy.js file

  views.TwitterNotLoggedIn = React.createClass({displayName: "TwitterNotLoggedIn",

    render: function(){
      return (
        React.createElement("div", {className: "not-logged-in", onClick: tiy.twitterLogin.bind(tiy)}, 
          React.createElement("span", null, "Sign In With Twitter"), 
          " ", 
          React.createElement(views.Icon, {fa: "twitter"})
        )
      );
    }

  });//calling twitterLogin from tiy.js file

  views.TwitterLogin = React.createBackboneClass({
    getChild: function(){
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return React.createElement(views.TwitterLoggedIn, {name: name, img: img})
      } else {
        return React.createElement(views.TwitterNotLoggedIn, null)
      }
    },

    render: function(){
      return (
        React.createElement("div", {className: "twitter-login"}, 
        this.getChild()
        )
      );
    }
  });

  views.Header = React.createBackboneClass({
    render: function(){
      return (
        React.createElement("div", {className: "header-wrapper"}, 
          React.createElement("div", {className: "header-upper"}, 
            React.createElement("div", {className: "logo"}, 
              React.createElement("h1", null, "Brewery Bee")
            ), 
            React.createElement("div", null, 
             React.createElement(views.TwitterLogin, {model: this.props.model})
            )
          ), 

          React.createElement("div", {className: "header-lower"}, 
            React.createElement("div", {className: "slogan"}, 
              React.createElement("h2", null, "Giving you the buzz on craft beer")
            )
          )
        )
      );
    }
  });

})(tiy.views);

//------ console ------ //

//tiy.views;
// tiy.init();
// var c = tiy.views.TwitterLoggedIn;
// var elem = React.createElement(c, {name: "jd", img: "http://lorempixel.com/50/50"});
// React.render(elem, document.body);

// tiy.init();
// tiy.currentUser;
// var c = tiy.views.TwitterLogin;
// var elem = React.createElement(c, {model: tiy.currentUser});
// React.render(elem, document.body);

// tiy.logout();


(function(views){

  views.Icon = React.createClass({displayName: "Icon",

    render: function() {
      //create font awesome class
      var cssClass= "fa fa-" + this.props.fa;
      //add spin effect
      if (this.props.spin){
        cssClass += " fa-spin";
      }
      return React.createElement("i", {className: cssClass})
    }

  });

  views.Toggle = React.createClass({displayName: "Toggle",
    render: function() {
     var icon = this.props.on ? "toggle-on" : "toggle-off";
      return(
        React.createElement("div", {className: "toggle", onClick: this.props.onToggle}, 
          React.createElement(views.Icon, {fa: icon})
        )
      );
    }
  });

  views.DeleteButton = React.createClass({displayName: "DeleteButton",
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
        React.createElement("div", {className: "delete-btn", onClick: this.onClick}, 
          React.createElement(views.Icon, {fa: "remove"})
        )
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
          React.createElement("a", {
          href: "#", 
          key: index, 
          onClick: this.onLinkClick.bind(this, crumb.route)}, 
            crumb.title
          )
        );
      }, this);
    },

    render: function(){
      if( !tiy.isLoggedIn() ){
        return React.createElement("div", null);
      } 
        return (
          React.createElement("div", {className: "breadcrumbs"}, 
            this.build()
          )
        );
      }
  });

  views.Progress = React.createClass({displayName: "Progress",
    render: function() {
      //get percent or 0
      var percent= this.props.percent || 0;
      //make sure it is an actual float, makes sure it keeps the decimal (aka "float")
      percent = parseFloat(percent);
      //normalize value (make it a number between 1 - 100)
      percent = percent * 100;
      //no less than 10 either
      percent = _.max([percent, 10]);
      //make it a string
      percent = percent.toString() + "%";

      return ( 
        React.createElement("div", {className: "progress"}, 
          React.createElement("div", {className: "complete", style: {width: percent}})
        )
      )
    }
  });

})(tiy.views);

(function(views){

  views.AddForm = React.createClass({displayName: "AddForm",
    getInitialState: function(){
      return {name: ""};
    },

    updateName: function(e){
      this.setState({name: e.target.value});
    },

    onSubmit: function(e){
      e.preventDefault();
      var form = this.getDOMNode();
      var data = $(form).serializeJSON();
      this.props.onAdd(data);
      this.setState({name:""});
    },

    render: function(){
      var adding = this.props.adding;
      var placeholder = "Add a " + adding;
      return(
        React.createElement("form", {onSubmit: this.onSubmit}, 
          React.createElement("input", {
            type: "text", 
            name: "name", 
            value: this.state.name, 
            onChange: this.updateName, 
            placeholder: placeholder})
        )
      );
    }

  });

  views.Milestone = React.createBackboneClass({
    toggleComplete: function(){
      this.props.model.toggleComplete();
    },

    render: function(){
      var name = this.props.model.get("name");
      var done = this.props.model.get("completed_at");
      return (
        React.createElement("div", {className: "milestone item"}, 
          React.createElement("div", {className: "item-title"}, name), 
          React.createElement(views.Toggle, {on: done, onToggle: this.toggleComplete})
        )
      );
    }
  });

  views.Milestones = React.createBackboneClass({
    
    getItem: function(model, index){
      return React.createElement(views.Milestone, {model: model, key: index})
    },

    add: function(data){
      // console.log("add task", data);
      this.props.collection.add(data);
    },

    render: function(){
      return(
        React.createElement("div", {className: "milestones list"}, 
          React.createElement("div", {className: "heading"}, 
            React.createElement("h2", null, this.props.title)
          ), 
          React.createElement("div", {className: "items"}, 
            this.props.collection.map(this.getItem) 
          ), 
          React.createElement("div", {className: "add-item"}, 
            React.createElement(views.AddForm, {adding: "milestone", onAdd: this.add})
          )
        )
      );

    }

  });

  views.Task = React.createBackboneClass({

    destroy: function(){
      this.props.model.destroy();
    },

    render: function() {
      var d = this.props.model.toJSON();
      return (
        React.createElement("div", {className: "task item", onClick: this.props.onClick}, 
          React.createElement("span", {className: "item-title"}, d.name), 
          React.createElement(views.DeleteButton, {
            confirm: "Really delete task? You will lose all milestones", 
            onDelete: this.destroy}), 
          React.createElement(views.Progress, {percent: d.percent_complete})
        )
      );
    }

  });

  views.Tasks = React.createBackboneClass({

    selectTask: function(model){
      this.props.onSelect(model);
    },

    getItem: function(model, index){
      return (
        React.createElement(views.Task, {
          model: model, 
          onClick: this.selectTask.bind(this, model), 
          key: index})
      );
    },

    add: function(data){
      // console.log("add task", data);
      this.props.collection.add(data);
    },

    render: function(){
      return(
        React.createElement("div", {className: "tasks list"}, 
          React.createElement("div", {className: "heading"}, 
            React.createElement("h2", null, "Tasks")
          ), 
          React.createElement("div", {className: "items"}, 
             this.props.collection.map(this.getItem) 
          ), 
          React.createElement("div", {className: "add-item"}, 
            React.createElement(views.AddForm, {adding: "task", onAdd: this.add})
          )
        )
      );
    }

  });

  //view that is in charge of showing tasks or milestones
  views.Main = React.createBackboneClass({

    render: function(){
      if(this.props.loading){
        return(
          React.createElement("div", {className: "main-loading"}, 
            React.createElement(views.Icon, {fa: "spinner", spin: "true"})
          )
        );
      }
      else if (this.props.collection && this.props.taskId){
        var taskId = this.props.taskId;
        var tasks = this.props.collection;
        var task = tasks.get(taskId);
        return React.createElement(views.Milestones, {
        collection: task.milestones, 
        title: task.get("name")})
      }
      else if (this.props.collection){
        return React.createElement(views.Tasks, {
        onSelect: this.props.onTaskSelect, 
        collection: this.props.collection})
      }
      else {
        return React.createElement("div", {className: "please-signin"}, "Please sign in to view or create tasks")
      }
    }

  }); 

})(tiy.views);

//backbone class if it has a model that goes with it


// var tasks = new tiy.models.Tasks();
// var t = tasks.first();
// t.toJSON();
// t.set("percent_complete", 1);
// t = tasks.at(1);
// t.attributes.name
// t.set("percent_complete", 0.5);
// check FB