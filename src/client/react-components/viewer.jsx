var React = require('react'),
    Griddle = require('griddle-react'),
    $ = require('jquery'),
    _ = require('lodash');

var Viewer = React.createClass({
  getInitialState: function() {
    return { data:[] };
  },
  componentDidMount: function() {
    var me = this;
    $.getJSON('/data', function(data) {
      me.setState({data: data});
    });
  },
  render: function() {
    return (<Griddle  results={this.state.data}
                      tableClassName="table"
                      showFilter={true}
                      showSettings={true}
                      columns={["name", "distance", "description", "See rides"]}/>);
  }
});

module.exports = Viewer;
