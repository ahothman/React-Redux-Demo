var { all, takeEvery } = require('redux-saga/effects')
var actionTypes = require('../actionTypes')
var searchArtistSaga = require('./searchArtistSaga.js')
var getArtistEventsSaga = require('./getArtistEventsSaga.js')

function* rootSaga(){
 yield all([
     takeEvery(actionTypes.GET_ARTIST_EVENTS, getArtistEventsSaga),
     takeEvery(actionTypes.SEARCH_ARTIST_BY_NAME,searchArtistSaga)
 ])
}

module.exports = rootSaga