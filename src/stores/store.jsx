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

var movies = []
var currentMovie = {}
var analyticsCollection = []

function addMovie(movie) {
  movies.push(movie)
}

function removeMovie(index) {
  movies.splice(index, 1)
}

function viewMovieDetails(movie) {
  currentMovie = movie
}

function addToAnalyticsCollection(movie) {
  var movieData = {
    name: movie.Title,
    y: parseInt(movie.imdbRating),
    drilldown: movieTitle
  }
  analyticsCollection.push(movieData)
}

var Store = assign(EventEmitter.prototype, {
  emitChange: () => {
    this.emit('change')
  },

  addChangeListener: (callback) => {
    this.on('change', callback)
  },

  removeChangeListener: (callback) => {
    this.removeListener('change', callback)
  },

  getMovie: () => {
    return currentMovie
  },

  getCollection: () => {
    return movies
  },

  getAnalyticsCollection: () => {
    return analyticsCollection
  }
})

Dispatcher.register((payload) => {
  var action = payload.action

  switch(action.actionType) {
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
  }
  console.log('emit event change')
  Store.emitChange()

  return true // resolve the dispatcher so the next action can happen
})

export default Store
