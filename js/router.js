// (function(router){

  var Routes = Backbone.Router.extend({

    routes: {
      ""                : "clear",
      "show/chapters"   : "showChapters",
      "show/references" : "showReferences"
    },

    initialize: function(){
      var elem = React.createElement(app.views.PgView, {
        onShow: this.onShow.bind(this)
      });

      this.comp = React.render(elem, document.body);

      // this.comp = React.render(elem, document.querySelector('.navigation-bar'));
    },

    onShow: function(show){
      if (show === "chapters") {
        this.showChapters();
        this.navigate("show/chapters");
      }
      else if (show === "references"){
        this.showReferences();
        this.navigate("show/references");
      }
      else{
        this.clear();
        this.navigate("");
      }
    },

    showChapters: function() {
      this.comp.setProps({show: "chapters"});
    },

    showReferences: function(){
      this.comp.setProps({show: "references"});
    },

    clear: function(){
      this.comp.setProps({show:null});
    }

});
// })(app.router);


