// var React = require('react')
//
// var Search = require('./Search.js')
//
// var MovieSearch = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>MovieSearch</h1>
//         <Search />
//       </div>
//     )
//   }
// })
//
// module.exports = MovieSearch

import React from 'react'

import Store from '../stores/store.jsx'
import Search from './Search.jsx'
import MovieDetails from './MovieDetails.jsx'

function getMovie() {
  return {
    movie: Store.getMovie()
  }
}

class MovieSearch extends React.Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.state = getMovie()
  }

  componentWillMount() {
    console.log('listening for event')
    Store.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange)
  }

  onchange() {
    console.log('an event was emitted, updating the state')
    this.setState(getMovie())
  }

  render() {
    return (
      <div>
        <Search />
        {
          this.state ? <MovieDetails movie={this.state.movie} /> : null
        }
      </div>
    )
  }
}

export default MovieSearch
