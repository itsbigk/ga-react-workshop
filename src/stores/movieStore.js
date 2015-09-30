import Constants from '../constants/constants'
import Store from './store'

var appState = {}
    appState.movies = []
    appState.currentMovie = {}
    appState.analyticsCollection = []

function addMovie(movie) {
  appState.movies.push(movie)
}

function removeMovie(index) {
  appState.movies.splice(index, 1)
}

function viewMovieDetails(movie) {
  appState.currentMovie = movie
}

function addToAnalyticsCollection(movie) {
  var movieData = {
    name: movie.Title,
    y: parseInt(movie.imdbRating),
    drilldown: movieTitle
  }
  appState.analyticsCollection.push(movieData)
}

class MovieStore extends Store {

  constructor() {
    super()
  }

  getState() {
    return appState
  }

  getMovie() {
    return appState.currentMovie
  }

  getCollection() {
    return appState.movies
  }

  getAnalyticsCollection()  {
    return appState.analyticsCollection
  }

  register(action) {

    switch(action.type) {
      case Constants.ADD_MOVIE:
        console.log('in store in ADD_MOVIE')
        addMovie(action.movie)
      break

      case Constants.REMOVE_MOVIE:
        console.log('in store in REMOVE_MOVIE')
        removeMovie(action.index)
      break

      case Constants.SHOW_MOVIE:
        console.log('in store in SHOW_MOVIE')
        setMovie(action.movie)
      break

      case Constants.ADD_TO_ANALYTICS:
        console.log('in store in ADD_TO_ANALYTICS')
        addToAnalyticsCollection(action.movie)
      break

      default:
        return
    }
    console.log('emit event change')
    MovieStore.emitChange()

    return true // resolve the dispatcher so the next action can happen
  }
}
export default MovieStore
