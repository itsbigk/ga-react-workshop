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
    MovieStore.addChangeListener(this._handleChange)
  }

  componentWillUnmount() {
    MovieStore.removeChangeListener(this._handleChange)
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
