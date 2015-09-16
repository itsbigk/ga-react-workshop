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

import Dispatcher from 'flux/lib/Dispatcher'
import assign from 'react/lib/Object.assign'

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: (action) => {
    console.log('in dispatcher, action is: ' + action)
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})

export default AppDispatcher
