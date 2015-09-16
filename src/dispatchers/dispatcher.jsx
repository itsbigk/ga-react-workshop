// var Dispatcher = require('flux').Dispatcher
// var assign = require('react/lib/Object.assign')
//
// var AppDispatcher = assign(new Dispatcher(), {
//   handleViewAction: function(action) {
//     this.dispatch({
//       source: 'VIEW_ACTION',
//       action: action
//     })
//   }
// })
//
// module.exports = AppDispatcher

import Dispatcher from 'flux'
import assign from 'react/lib/Object.assign'

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})

export default AppDispatcher
