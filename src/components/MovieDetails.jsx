import React from 'react'

import Add from './Add.jsx'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: props.movie
    }
  }

  render () {
    return (
      <div>
        <h3>{this.state.movie.title}</h3>
        <div className="row">
          <div className="col-sm-6">
            <img src={this.state.movie.Poster} />
          </div>
          <div className="col-sm-6">
            <h4>Year: <span className="text-muted">{this.state.movie.year}</span></h4>
            <h4>Writer: <span className="text-muted">{this.state.movie.Writer}</span></h4>
            <h4>Actors: <span className="text-muted">{this.state.movie.Actors}</span></h4>
            <h4>IMDB Rating: <span className="text-muted">{this.state.movie.imdbRating}</span></h4>
            <Add movie={this.state.movie} />
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails
