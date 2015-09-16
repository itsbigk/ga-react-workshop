// var Constants = require('../constants/constants.js')
// var Dispatcher = require('../dispatchers/dispatcher.js')
// var assign = require('react/lib/Object.assign')
// var EventEmitter = require('events').EventEmitter
//
//
// var movies = []
// var currentMovie = {}
//
// function addMovie(movie) {
//   movies.push(movie)
// }
//
// var Store = assign(EventEmitter.prototype, {
//   emitChange: function() {
//     this.emit('change')
//   },
//
//   addChangeListener: function(callback) {
//     this.on('change', callback)
//   },
//
//   getMovie: function() {
//     return currentMovie
//   }
// })
//
// Dispatcher.register(function(payload) {
//   var action = payload.action
//
//   switch(action.actionType) {
//     case Constants.ADD_MOVIE:
//     addMovie(action.movie)
//     break
//
//     case Constants.SHOW_MOVIE
//     setMovie(action.movie)
//     break
//   }
// })
//
// Store.emitChange()
//
// return true
//
// module.exports = Store

import Constants from '../constants/constants.jsx'
import Dispatcher from '../dispatchers/dispatcher.jsx'
import assign from 'react/lib/Object.assign'
import EventEmitter from 'events'

let movies = []
let currentMovie = {}

addMovie(movie) => {
  movies.push(movie)
}

var Store = assign(EventEmitter.prototype, {
  emitChange() {
    this.emit('change')
  }

  addChangeListener(callback) {
    this.on('change', callback)
  }

  getMovie() {
    return currentMovie
  }
})

Dispatcher.register((payload) => {
  var action = payload.action

  switch(action.actionType) {
    case Constants.ADD_MOVIE:
    addMovie(action.movie)
    break

    case Constants.SHOW_MOVIE:
    setMovie(action.movie)
    break
  }
})

Store.emitChange()

return true

export default Store
