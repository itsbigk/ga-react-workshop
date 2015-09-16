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
import Constants from '../constants/constants.jsx'
import Dispatcher from '../dispatchers/dispatcher.jsx'

let Actions = {
  addMovie: (movie) => {
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_MOVIE,
      movie: movie
    })
  },
  removeMovie: (movie) => {
    Dispatcher.handleViewAction({
      actionType: Constants.REMOVE_MOVIE,
      index: index
    })
  },
  setCurrentMovie: (movie) => {
    Dispatcher.handleViewAction({
      actionType: Constants.SHOW_MOVIE,
      movie: movie
    })
  },
  addToAnalytics: (movie) => {
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_TO_ANALYTICS,
      movie: movie
    })
  }
}

export default Actions
