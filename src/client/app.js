var React     = require('react'),
    ReactDOM  = require('react-dom'),
    Viewer    = require('./react-components/viewer.jsx');

ReactDOM.render(React.createElement(Viewer, null), document.getElementById('content'));
