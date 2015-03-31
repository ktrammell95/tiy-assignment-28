tiy.Router = Backbone.Router.extend({

  routes: {
    ""            : "showIndex",  
    // "tasks"       : "showTasks",
    // "tasks/:task" : "showMilestones"
  },

  initialize: function(){

    this.header = React.render(
      React.createElement(tiy.views.Header, {
      model: tiy.currentUser
      }),
      document.querySelector("header")
    );

    // this.tasks = tiy.isLoggedIn() ? new tiy.models.Tasks() : null;

    // this.main = React.render(
    //   React.createElement(tiy.views.Main, {
    //   collection: this.tasks,
    //   onTaskSelect: this.onTaskSelect.bind(this)
    //   }),
    //   document.querySelector("main")
    // );

    this.listenTo(tiy, "sign:out", function(){
      this.tasks = null;
      this.main.setProps({collection: this.tasks});
    });

    this.listenTo(tiy, "sign:in", function(){
      this.tasks = new tiy.models.Tasks();
      this.main.setProps({collection: this.tasks});
    })

  },

});

// var tid = tiy.router.tasks.first().id;
// tid;
// tiy.router.navigate("tasks/" + tid);
// tiy.router.navigate("tasks");
// tiy.router.navigate("tasks/" + tid, {trigger:true});