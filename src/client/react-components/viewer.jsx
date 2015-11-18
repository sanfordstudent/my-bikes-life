var React = require('react'),
    Griddle = require('griddle-react'),
    $ = require('jquery');

var Viewer = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    var data = $.getJSON('/data', function() {
      this.setState({data: data});
    });
  },
  render: function() {
    return <Griddle result={this.state.data} />
  }
});

module.exports = Viewer;
