var Constants = require('../constants/constants.js')
var Dispatcher = require('../dispatchers/dispatcher.js')

var Actions = {
  addMovie: function(movie){
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_MOVIE,
      movie: movie
    })
  }
  setCurrentMovie: function(movie){
    Dispatcher.handleViewAction({
      actionType: Constants.SHOW_MOVIE,
      movie: movie
    })
}
