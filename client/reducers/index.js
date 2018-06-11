var { combineReducers } = require('redux')
var artist = require('./artistRedcuer.js')
var events = require('./artistEventReducer')
var isInAjaxCall = require('./ajaxCallReducer.js');

var rootReducers = combineReducers({
  artist,
  events,
  isInAjaxCall
})

module.exports = rootReducers