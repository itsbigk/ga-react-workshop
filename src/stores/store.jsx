import EventEmitter from 'events'
import Constants from '../constants/constants'

class Store extends EventEmitter {

  constructor() {
    super()
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback)
  }
}

Store.dispatchToken = null

export default Store
