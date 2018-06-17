var { combineReducers } = require('redux')
var artist = require('./artistRedcuer.js')
var lastSearchedName = require('./searchedNameReducer')
var events = require('./artistEventReducer')
var isInAjaxCall = require('./ajaxCallReducer.js');

var rootReducers = combineReducers({
  artist,
  events,
  lastSearchedName,
  isInAjaxCall
})

module.exports = rootReducers