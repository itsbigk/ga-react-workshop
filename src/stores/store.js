import { EventEmitter } from 'events'
import AppDispatcher from '../dispatchers/dispatcher'

var CHANGE_EVENT = 'change'

class Store extends EventEmitter {

  constructor() {
    super()
    this.register = this.register.bind(this)
    AppDispatcher.register(this.register)
  }

  register(action) {
    console.error('Please add the register function to your store')
  }

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  onChange(callback) {
    this.addChangeListener(callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}

export default Store
