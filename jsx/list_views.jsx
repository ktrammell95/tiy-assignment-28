// ------------ Beer and Brewery Lists ------------ //
(function(views){

  views.Search = React.createBackboneClass({
    handleSubmit: function(e) {
      e.preventDefault();
      var q = this.refs.q.getDOMNode().value;
      this.props.onSearch(q);
    },

    render: function() {
      return (
          <div className="search">
            <form className="search-form" action="" method="" onSubmit={this.handleSubmit}>
              <span></span>
              <input ref="q" type="text" className="search-field" name="q" placeholder="Enter Search Words"/>
              <input type="submit" className = "search-button"/>
            </form>
          </div>
        )
    }
  }),
//Beer List information
    
  views.BeerListView = React.createBackboneClass({

    getInitialState: function() {
      return { searchResults: this.props.collection };
    },

    getBeer: function(model) {
      return (
        <tr>
          <td><a data-beer-id={model.get("id")} href="#" onClick={this.beerDetail}>{model.get("name")}</a></td>
          <td>{model.styleName()}</td>
          <td>{model.availabilityName()}</td>
          <td>{model.breweryNames()}</td>
        </tr>
      );
    },

    beerDetail: function(e) {
      e.preventDefault();
      var beerId = $(e.target).attr("data-beer-id");
      // console.log(e.target, e.target.href);
      this.props.onShowBeerDetail(beerId);
    },

    performSearch: function(query) {

      var url = "/api/search?type=beer&withBreweries=Y&q=" + query;

      $.getJSON(url, function(results){
        // do something with results
        // console.log(results);
        this.setState({searchResults: new tiy.models.Beers(results.data)});
      }.bind(this));

// componentDidMount: function() {
//     $.ajax({
//       url: this.props.url,
//       dataType: 'json',
//       success: function(data) {
//         this.setState({data: data});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },


    },

    render: function(){
      return(
        <div className="list_views">
          <views.Search onSearch={this.performSearch}/>
          <div className="beer_list brewery_list">
            <h2>Beer List</h2>
              <table>
                <thead>
                  <th>Name</th>
                  <th>Style</th>
                  <th>Availability</th>
                  <th>Brewery</th>
                </thead>
                <tbody>
                  {this.state.searchResults.map(this.getBeer)}
                </tbody>
              </table>
          </div>
        </div>
      )
    }
  });

//Beer List information
  views.BreweryListView = React.createBackboneClass({
    getBrewery: function(model) {
      return (
        <tr>
          <td><a data-brewery-id={model.get("id")} href="#" onClick={this.breweryDetail}>{model.get("name")}</a></td>
          <td><img className="brewery_image" src={model.getImages()}/></td>
        </tr>
      );
    },

    breweryDetail: function(e) {
      e.preventDefault();
      var breweryId = $(e.target).attr("data-brewery-id");
      console.log(e.target, e.target.href);
      this.props.onShowBreweryDetail(breweryId);
    },

    render: function(){
      return(
        <div>
          <div className="list_views">
            <div className="beer_list brewery_list">
              <h2>Brewery List</h2>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>Logo</th>
                  </thead>
                  <tbody>
                    {this.props.collection.map(this.getBrewery)}
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      )
    }
  });
 

})(tiy.views);

