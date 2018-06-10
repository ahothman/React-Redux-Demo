var {  createStore, applyMiddleware} = require('redux')
var { default: createSagaMiddleware }  = require('redux-saga');
var rootReducers = require('../reducers')
var rootSagas = require('../sagas')

var sagaMiddleware = createSagaMiddleware()

var store = createStore(rootReducers,{},applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSagas)

module.exports = store
