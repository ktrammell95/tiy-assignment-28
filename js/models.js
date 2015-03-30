(function(models){

  models.Task = Backbone.Model.extend({
    initialize: function() {
      this.milestones = new models.Milestones(null, {task: this});

      this.listenTo(this.milestones, "change:completed_at", function(){
        var percent = this.calcPercentComplete();
        this.set("percent_complete", percent);
      });
    },

    calcPercentComplete: function(){
      // 3 total
      // 2 of them are complete

      //count how many milestones we have
      var totalMilestoneCount = this.milestones.length; // should equal 3
      //grab all the completed milestones
      var completedMilestones = this.milestones.filter(function(ms){
        return !!ms.get("completed_at");
      });
      //count how many completed milestones we have
      var completedMilestoneCount = completedMilestones.length;
      //divide completed by total
      var percent = completedMilestoneCount / totalMilestoneCount;

      return percent;
    }
  });

  models.Tasks = Backbone.Firebase.Collection.extend({
    model: models.Task,

    url: function() {
      if (!tiy.authData || !tiy.authData.uid){
        throw new Error("I need a user!");
      }
      var uid = encodeURIComponent(tiy.authData.uid);
      return tiy.firebaseURL + "/" + uid + "/tasks";
    }
  });

  models.Milestone = Backbone.Model.extend({

    toggleComplete: function(){
      if (!!this.get("completed_at")){
        this.set("completed_at", null);
      }
      else {
        this.set("completed_at", new Date().toString());
      }
    }
  });

  models.Milestones = Backbone.Firebase.Collection.extend({
    model: models.Milestone,

    url: function() {
      if(!tiy.authData || !tiy.authData.uid){
        throw new Error("A user must be logged in");
      }
      if(!this.task){
        throw new Error("I need a task");
      }
      var uid = encodeURIComponent(tiy.authData.uid);
      var tid = this.task.id;
      return tiy.firebaseURL + "/" + uid + "/milestones/" + tid;
    },

    initialize: function(data, options){
      options || (options = {});
      this.task = options.task;
    }

  });


})(tiy.models);

//models is the namespace we are using

// ----- console ----- //

// var c = new tiy.models.Tasks();
// c.url();
// c.add({name: "write data models"});
// var ms = new tiy.models.Milestones();
// var ts = new tiy.models.Tasks();
// ts;
// var t = ts.first();
// var ms = new tiy.models.Milestones(null, {task: t});
// ms;
// ms.url();
// ms.add({name: "create tasks collection"});
  //look at Firebase
// 

// milestone.get("completed_at");


// var tasks = new tiy.models.Tasks();
// var t = tasks.first();
// t.get("name");
// t.milestones;
// t.milestones.first().get("name");


// tiy.router.tasks;
// var t = tiy.router.tasks.first();
// t;
// t.id;
// tiy.router.main.setProps({task: t.id})
