import React from 'react'

import Actions from '../actions/actions.jsx'

class MoviePanel extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    var movie = this.props.movie
  }

  handleClick() {
    Actions.addToAnalytics(movie)
  }

  render () {
    return (
      <div className="container">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">{movie.Title}</h3>
            <i className="fa fa-plus" onClick={this.handleClick}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default MoviePanel
