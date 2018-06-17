var {  createStore, applyMiddleware} = require('redux')
var { default: createSagaMiddleware }  = require('redux-saga')
var rootReducers = require('../reducers')
var rootSagas = require('../sagas')
var { saveState, getSavedState } = require('../utils')

var sagaMiddleware = createSagaMiddleware()
/** get the store state to the local storage */
var currentState = getSavedState()
var store = createStore(rootReducers,currentState,applyMiddleware(sagaMiddleware))

/** Save the store state to the local storage */
store.subscribe(()=>{
    saveState(store.getState())
})

sagaMiddleware.run(rootSagas)

module.exports = store
