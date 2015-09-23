import React from 'react'

import Actions from '../actions/actions'

class Add extends React.Component {
  constructor(props) {
    super(props)

    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick(movie) {
    Actions.addMovie(movie)
  }

  render () {
    return (
      <button className="btn btn-default" onClick={this._handleClick(this.props.movie)}>Add to collection</button>
    )
  }
}

export default Add
