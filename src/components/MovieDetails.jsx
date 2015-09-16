import React from 'react'

import Add from './Add.jsx'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)
    var movie = this.props.movie
  }

  render () {
    return (
      <div>
        <h3>{movie.title}</h3>
        <div className="row">
          <div className="col-sm-6">
            <img src={movie.Poster} />
          </div>
          <div className="col-sm-6">
            <h4>Year: <span className="text-muted">{movie.year}</span></h4>
            <h4>Writer: <span className="text-muted">{movie.Writer}</span></h4>
            <h4>Actors: <span className="text-muted">{movie.Actors}</span></h4>
            <h4>IMDB Rating: <span className="text-muted">{movie.imdbRating}</span></h4>
            <Add movie={movie} />
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails
