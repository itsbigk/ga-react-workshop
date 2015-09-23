import React from 'react'

import Add from './Add'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
        <div className="row">
          <div className="col-sm-6">
            <img src={this.props.movie.Poster} />
          </div>
          <div className="col-sm-6">
            <h4>Year: <span className="text-muted">{this.props.movie.year}</span></h4>
            <h4>Writer: <span className="text-muted">{this.props.movie.Writer}</span></h4>
            <h4>Actors: <span className="text-muted">{this.props.movie.Actors}</span></h4>
            <h4>IMDB Rating: <span className="text-muted">{this.props.movie.imdbRating}</span></h4>
            <Add movie={this.props.movie} />
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails
