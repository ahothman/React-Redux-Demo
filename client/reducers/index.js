var { combineReducers } = require('redux')
var artist = require('./artistRedcuer.js')
var events = require('./artistEventReducer')

var rootReducers = combineReducers({
  artist,
  events
})

module.exports = rootReducers