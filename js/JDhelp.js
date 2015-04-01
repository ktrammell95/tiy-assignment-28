{
  "users": {
    "sdsdsd-zz": {},
    "sdsdsd": {},
    "sdsdsd": {},
    "sdsdsd": {}
  },

  "breweries": {
    "sddfdsf-zz": {},
    "sddfdsf": {},
    "sddfdsf": {},
    "sddfdsf": {}
  },

  "users_breweries": {
    "sdsdsdsd": {
      "id": "sdsdsdsd",
      "user_id": "sdsdsd-zz",
      "brewery_id": "sddfdsf-zz"
    },
    "sdsdsddd": {},
    "sdsdsddd": {},
    "sdsdsddd": {},
    "sdsdsddd": {}
  }
}

// all users
var users = new Users();
// all breweries
var breweries = new Breweries();
// all joins
var userBreweries = new UsersBreweries();

// a single user
var user = users.first();

// all the records in the join table for that user
var brewery_id_models = userBreweries.filter(function(user_brewery){
  return user_brewery.get("user_id") === user.id;
});

// all the brewery ids from the join table records
brewery_ids = _.map(brewery_id_models, function(user_brewery) {
  return user_brewery.get("brewery_id");
});

// all the breweries from those ids
var users_breweries = breweries.filter(function(brewery){
  return _.contains(brewery_ids, brewery.id);
});