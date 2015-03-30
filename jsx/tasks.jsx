(function(views){

  views.AddForm = React.createClass({
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
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateName}
            placeholder={placeholder}/>
        </form>
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
        <div className="milestone item">
          <div className="item-title">{name}</div>
          <views.Toggle on={done} onToggle={this.toggleComplete}/>
        </div>
      );
    }
  });

  views.Milestones = React.createBackboneClass({
    
    getItem: function(model, index){
      return <views.Milestone model={model} key={index}/>
    },

    add: function(data){
      // console.log("add task", data);
      this.props.collection.add(data);
    },

    render: function(){
      return(
        <div className="milestones list">
          <div className="heading">
            <h2>{this.props.title}</h2>
          </div>
          <div className="items">
           { this.props.collection.map(this.getItem) }
          </div>
          <div className="add-item">
            <views.AddForm adding="milestone" onAdd={this.add}/>
          </div>
        </div>
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
        <div className="task item" onClick={this.props.onClick}>
          <span className="item-title">{d.name}</span>
          <views.DeleteButton 
            confirm="Really delete task? You will lose all milestones"
            onDelete={this.destroy}/>
          <views.Progress percent={d.percent_complete}/>
        </div>
      );
    }

  });

  views.Tasks = React.createBackboneClass({

    selectTask: function(model){
      this.props.onSelect(model);
    },

    getItem: function(model, index){
      return (
        <views.Task
          model={model}
          onClick={this.selectTask.bind(this, model)}
          key={index}/>
      );
    },

    add: function(data){
      // console.log("add task", data);
      this.props.collection.add(data);
    },

    render: function(){
      return(
        <div className="tasks list">
          <div className="heading">
            <h2>Tasks</h2>
          </div>
          <div className="items">
            { this.props.collection.map(this.getItem) }
          </div>
          <div className="add-item">
            <views.AddForm adding="task" onAdd={this.add}/>
          </div>
        </div>
      );
    }

  });

  //view that is in charge of showing tasks or milestones
  views.Main = React.createBackboneClass({

    render: function(){
      if(this.props.loading){
        return(
          <div className="main-loading">
            <views.Icon fa="spinner" spin="true"/>
          </div>
        );
      }
      else if (this.props.collection && this.props.taskId){
        var taskId = this.props.taskId;
        var tasks = this.props.collection;
        var task = tasks.get(taskId);
        return <views.Milestones
        collection = {task.milestones}
        title = {task.get("name")}/>
      }
      else if (this.props.collection){
        return <views.Tasks
        onSelect={this.props.onTaskSelect}
        collection={this.props.collection}/>
      }
      else {
        return <div className="please-signin">Please sign in to view or create tasks</div>
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