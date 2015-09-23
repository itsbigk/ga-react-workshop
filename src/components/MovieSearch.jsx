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

import MovieStore from '../stores/movieStore'
import Search from './Search'
import MovieDetails from './MovieDetails'

class MovieSearch extends React.Component {
  constructor() {
    super()

    console.log('listening for event')
    this._handleChange = this._handleChange.bind(this)
    this.state = MovieStore.getState()
  }

  componentDidMount() {
    console.log(this._handleChange)
    Store.addChangeListener(this._handleChange)
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._handleChange)
  }

  _handleChange() {
    console.log('an event was emitted, updating the state')
    this.setState(MovieStore.getState())
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
