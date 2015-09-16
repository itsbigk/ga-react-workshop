var React = require('react')

var Search = require('./Search.js')

var MovieSearch = React.createClass({
  render: function() {
    return (
      <div>
        <h1>MovieSearch</h1>
        <Search />
      </div>
    )
  }
})

module.exports = MovieSearch
