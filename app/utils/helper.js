// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAPI = "d56a7df1dafe4333ac6c619ad810fd7b";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to NYT.
  runQuery: function(topic) {
    
    var topic = topic.trim();
    console.log("Topic: ", topic);

    // Figure out the geolocation
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    return axios.get(url, {
      params: {
         'api-key': nytAPI,
          'q': topic,
          //'begin_date': start,
          //'end_date': end
      }
    }).then(function(res) {
      // If get get a result, return that result's formatted address property
     // if (res.data.results[0]) {
        return res.data.response.docs;//[0].headline.main;
     // }
      // If we don't get any results, return an empty string
     // return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
 // getHistory: function() {
   // return axios.get("/api");
  //},

  // This function posts new searches to our database.
 // postHistory: function(location) {
  //  return axios.post("/api", { location: location });
    /* `req.body` (from server.js) is the information sent along with the post 
    request from the front end. So it's that object `{location: location}`. */
 // }

};

// We export the API helper
module.exports = helper;
