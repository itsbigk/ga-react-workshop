// ES5
// var React = require('react')
// var Router = require('react-router')
//
// var routes = require('./config/routes.js')
//
// Router.run(routes, function(Root) {
//   React.render(<Root />, document.getElementById('app'))
// })

// ES6
import React from 'react'
import Router from 'react-router'
import routes from './config/routes.jsx'

Router.run(routes, (Root) => {
  React.render(<Root />, document.getElementById('app'))
})
