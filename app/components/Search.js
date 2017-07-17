// Include React
var React = require("react");
var helper  = require("../utils/helper");

// Creating the Results component
var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    this.setState({ term: event.target.value });
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    
    // Run the query for Topic, Start Year, End Year
    helper.runQuery(this.state.term).then(function(data) {
     
        console.log("Topic", data);
        this.props.setResults(data );
       
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
        }.bind(this));//then
    // Set the parent to have the search term
    //this.props.setTerm(this.state.term);
    //Clearing the input firld after submitting
    this.setState({ term: "" });
  },

  // Here we render the function
  render: function() {
    return( 
      <div className = "parent">
        <div className = "panel panel-default" id = "search"> 
          <div className= "panel-heading"> <center> Search </center>
          </div>
          <div className = "panel-body"> 
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <center>Topic</center> 
                <input value={this.state.term} type="text" className="form-control" id="exampleInput"
                 onChange={this.handleChange} required/>
              </div>

              <div className="form-group">
                <center>Start Year</center> 
               <input value={this.state.term} type="text" className="form-control" id="exampleInput"
                 onChange={this.handleChange} required/>
              </div>
              
              <div className="form-group">
                <center>End Year</center> 
                <input value={this.state.term} type="text" className="form-control" id="exampleInput"
                 onChange={this.handleChange} required/>
              </div>
              <center>
                <button type="submit" className="btn btn-default">Submit</button>
              </center>
            </form> 
          </div>
        </div>

        <div className = "panel panel-default" id = "results">
          <div className= "panel-heading"> <center> Results </center> 
          </div>
          <div className = "panel-body">
            <form className="form-inline">
              <div className="form-group"  id ="result">
                <input type="text" size = "74" className="form-control" id="exampleInput" readOnly />
                <button type="submit" className="btn btn-default">Save</button> 
              </div>

              <div className="form-group" id = "result">
                <input type="text" size = "74" className="form-control" id="exampleInput" readOnly />
                <button type="submit" className="btn btn-default">Save</button> 
              </div>

              <div className="form-group" id = "result">
                <input type="text" size = "74" className="form-control" id="exampleInput" readOnly />
                <button type="submit" className="btn btn-default">Save</button> 
              </div>

              <div className="form-group" id = "result">
                <input type="text" size = "74" className="form-control" id="exampleInput" readOnly />
                <button type="submit" className="btn btn-default">Save</button> 
              </div>

              <div className="form-group" id = "result">
                <input type="text" size = "74" className="form-control" id="exampleInput" readOnly />
                <button type="submit" className="btn btn-default">Save</button> 
              </div>
            </form>
          </div>
        </div> 
        </div>
    );
  }
});
// Export the component back for use in other files
   module.exports = Search;
