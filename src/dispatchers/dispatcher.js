import { Dispatcher } from 'flux'
import assign from 'object-assign'
import Constants from '../constants/constants'

class AppDispatcher extends Dispatcher {

  handleServerAction(action) {
    console.log('in dispatcher for server action: ' + action)
    if(!action.type) {
      throw new Error('Empty action')
    }

    this.dispatch({
      source: Constants.SERVER_ACTION,
      action: action
    })
  }

  handleViewAction(action) {
    console.log('in dispatcher, action is: ' + action)
    if(!action.type) {
      throw new Error('Empty action')
    }

    this.dispatch({
      source: Constants.VIEW_ACTION,
      action: action
    })
  }
}

let _AppDispatcher = new AppDispatcher()

export default _AppDispatcher
