import React from 'react'

import Actions from '../actions/actions.jsx'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this)
    var movie = this.props.movie
  }

  _handleClick(movie) {
    Actions.addMovie(movie)
  }

  render () {
    return (
      <button className="btn btn-default" onClick={this._handleClick}>Add to collection</button>
    )
  }
}

export default Add
