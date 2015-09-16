// var React = require('react');
// var Router = require('react-router')
// var Route = Router.Route
//
// var Main = require('../components/Main.js')
// var Analytics = require('../components/Analytics.js')
// var Collection = require('../components/Collection.js')
// var MovieSearch = require('../components/MovieSearch.js')
//
// module.exports = (
//   <Route name="home" path="/" handler={Main}>
//     <Route name="movies" path="/movies" handler={MovieSearch} />
//     <Route name="collection" path="/collection" handler={Collection} />
//     <Route name="analytics" path="/analytics" handler={Analytics} />
//   </Route>
// )

import React from 'react'
import {Router, Route} from 'react-router'

import Main from '../components/Main.jsx'
import Analytics from '../components/Analytics.jsx'
import Collection from '../components/Collection.jsx'
import MovieSearch from '../components/MovieSearch.jsx'

export var routes = (
  <Route name="home" path="/" handler={Main}>
    <Route name="movies" path="/movies" handler={MovieSearch} />
    <Route name="collection" path="/collection" handler={Collection} />
    <Route name="analytics" path="/analytics" handler={Analytics} />
  </Route>
)
