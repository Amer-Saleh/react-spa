// Include React
var React   = require("react");
var Search  = require("./Search");
var Saved   = require("./Saved");
var helper  = require("../utils/helper"); //"../utils/helper"

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    //We need to add --> history:[] later on
    return { searchTerm: "", results: "" };
  },

  
  // This function allows childrens to update the parent.
  setResults: function(results) {
    this.setState({ results: results });
  },
  // Here we describe this component's render method
  render: function() {
    return (
              <div className="panel panel-default">
                <div className="panel-heading"> <center> New York Times Article Scrubber </center> </div>
                <div className="panel-body">
                  <Search setResults={this.setResults}/>
                  <Saved />
                </div>
              </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
