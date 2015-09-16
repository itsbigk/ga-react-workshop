var Constants = require('../constants/constants.js')
var Dispatcher = require('../dispatchers/dispatcher.js')
var assign = require('react/lib/Object.assign')
var EventEmitter = require('events').EventEmitter


var movies = []
var currentMovie = {}

function addMovie(movie) {
  movies.push(movie)
}

var Store = addign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change')
  },

  addChangeListener: function(callback) {
    this.on('change', callback)
  },

  getMovie: function {
    return currentMovie
  }
})

Dispatcher.register(function(payload) {
  var action = payload.action

  switch(action.actionType) {
    case Constants.ADD_MOVIE:
    addMovie(action.movie)
    break

    case Constants.SHOW_MOVIE
    setMovie(action.movie)
    break
  }
})

Store.emitChange()

return true

module.exports = Store
