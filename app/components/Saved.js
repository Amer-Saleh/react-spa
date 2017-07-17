// Include React
var React = require("react");

// Creating the Results component
var Saved = React.createClass({
  // Here we render the function
  render: function() {
    return( 
      <div className = "parent">
        <div className = "panel panel-default" id = "saved">
          <div className= "panel-heading"> <center> Saved Articles </center> 
          </div>
          <div className = "panel-body">
            <form className="form-inline">
              <div className="form-group"  id ="result">
                <input type="text" size = "70" className="form-control" id="exampleInput"  readOnly/>
                <button type="submit" className="btn btn-default">Remove</button> 
                <input type="text" size = "81" className="form-control" id="exampleInput"  />
              </div>

              <div className="form-group" id = "result">
                <input type="text" size = "70" className="form-control" id="exampleInput"  readOnly/>
                <button type="submit" className="btn btn-default">Remove</button> 
                <input type="text" size = "81" className="form-control" id="exampleInput"  />
              </div>
            </form>
          </div>
        </div> 
        </div>
    );
  }
});
// Export the component back for use in other files
   module.exports = Saved;
