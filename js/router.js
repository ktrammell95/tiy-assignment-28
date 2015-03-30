tiy.Router = Backbone.Router.extend({

  routes: {
    ""            : "showIndex",  
    "tasks"       : "showTasks",
    "tasks/:task" : "showMilestones"
  },

  initialize: function(){

    this.header = React.render(
      React.createElement(tiy.views.Header, {
      model: tiy.currentUser
      }),
      document.querySelector("header")
    );

    // this.nav = React.render(
    //   React.createElement(tiy.views.Breadcrumbs, {
    //     onRoute: this.onNav.bind(this)
    //   }),
    //   document.querySelector("nav")
    // );

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

  // onNav: function(route){
  //   // console.log("route", route);
  //   this.navigate(route, {trigger: true});
  // },

  onTaskSelect: function(task){
    // console.log("selected", task.id);
    this.showMilestones(task.id);
    this.navigate("tasks/" + task.id);
  },

  showIndex: function(){
    this.navigate("tasks", {trigger: true, replace: true});
  },

  showTasks: function(){
    this.main.setProps({taskId: null});

    //set the breadcrumbs
    this.nav.setProps({data: [
      {route: "tasks", title: "Tasks"}
    ]});
  },

  showMilestones: function(taskId){
    //check presence of task
    if (this.tasks.get(taskId)){
      //we have the task.. so we are good to go
      this.main.setProps({taskId: taskId});

      var taskName = this.tasks.get(taskId).get("name");
      this.nav.setProps({data: [
        {route: "tasks",           title: "Tasks"},
        {route: "tasks/"+taskId,   title: taskName}
      ]});

    } else {
      //set to loading
      this.main.setProps({loading: true});

      this.tasks.fetch({

        success: function(){

          //check for the presence of task
          if (this.tasks.get(taskId)) {
            this.main.setProps({taskId: taskId, loading: false});

            var taskName = this.tasks.get(taskId).get("name");
             this.nav.setProps({data: [
                {route: "tasks",           title: "Tasks"},
                {route: "tasks/" + taskId, title: taskName}

            ]});

          } else {
            //task doesn't exist
            alert("That task doesn't exist");
            this.main.setProps({taskId: null, loading: false});
            this.navigate("/tasks", {replace: true});
          }

        }.bind(this)

      });
    }
    // this.main.setProps({task: task});
  }

});

// var tid = tiy.router.tasks.first().id;
// tid;
// tiy.router.navigate("tasks/" + tid);
// tiy.router.navigate("tasks");
// tiy.router.navigate("tasks/" + tid, {trigger:true});