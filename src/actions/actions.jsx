// ES5
// var Constants = require('../constants/constants.js')
// var Dispatcher = require('../dispatchers/dispatcher.js')
//
// var Actions = {
//   addMovie: function(movie){
//     Dispatcher.handleViewAction({
//       actionType: Constants.ADD_MOVIE,
//       movie: movie
//     })
//   }
//   setCurrentMovie: function(movie){
//     Dispatcher.handleViewAction({
//       actionType: Constants.SHOW_MOVIE,
//       movie: movie
//     })
// }

// module.exports = Actions

// ES6
import Constants from '../constants/constants'
import Dispatcher from '../dispatchers/dispatcher'

let Actions = {
  addMovie: (movie) => {
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_MOVIE,
      movie: movie
    })
  }
  setCurrentMovie: (movie) => {
    Dispatcher.handleViewAction({
      actionType: Constants.SHOW_MOVIE,
      movie: movie
    })
  }
}

export default Actions
