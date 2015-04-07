(function(views){

  views.Blogfields = React.createClass({
    render: function(){
      return(
        <form>
          <h4>Title:</h4><br/>
          <input type="text" name="title"/>
          <br/>
          <h4>Blog Post:</h4><br/>
          <input type="text" name="lastname"/>
        </form>
      )
    }
  });

  views.Section = React.createClass({
    render: function(){
      return(
        <views.Blogfields/>
      )
    }
  });

  views.Blog = React.createClass({
    render: function(){
      return(
        <div className="blog">
          <h3>Title et accusamus et iusto</h3>
          <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
      )
    }
  });

  views.Section = React.createClass({
    render: function(){
      return(
        <views.Blog/>
      )
    }
  });


})(tiy.views);