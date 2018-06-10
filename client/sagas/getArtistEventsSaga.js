var { take, put, call} = require('redux-saga/effects')
var actionTypes = require('../actionTypes')
var { getArtistEventsSuccess, getArtistEventsFailure }  = require('../actions/artistEventsActions.js')
var {  getArtistEvents } = require('../api')


function* getArtistEventSaga(){
    var { name } = yield take(actionTypes.GET_ARTIST_EVENTS)
    var response = yield call(getArtistEvents, name)
    if(response instanceof Error){
        yield put(getArtistEventsFailure(response.message))
    }
    else{
        yield put(getArtistEventsSuccess(response))
    }
}

module.exports = getArtistEventSaga

