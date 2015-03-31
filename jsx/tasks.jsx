(function(views){

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