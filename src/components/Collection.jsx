// var React = require('react')
//
// var Collection = React.createClass({
//   render: function() {
//     return (
//       <h1>Collection</h1>
//     )
//   }
// })
//
// module.exports = Collection

import React from 'react'

import MoviePanel from './MoviePanel.jsx'
import Store from '../stores/store.jsx'

class Collection extends React.Component {
  constructor() {
    super()
    this.state.movies = Store.getCollection()
  }

  render() {
    var movies = this.state.movies
    var movieNodes = movies.map((movie, i) => {
      return (
        <MoviePanel movie={movie} key={i} />
      )
    })
    return (
      <div>
        {movieNodes}
      </div>
    )
  }
}

export default Collection
