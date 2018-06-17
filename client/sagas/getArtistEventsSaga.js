var { take, put, call} = require('redux-saga/effects')
var actionTypes = require('../actionTypes')
var { getArtistEventsSuccess, getArtistEventsFailure }  = require('../actions/artistEventsActions.js')
var {  getArtistEvents } = require('../api')
var { isInAjaxCall }  = require('../actions/ajaxActions.js')

function* getArtistEventSaga(payLoad){
    var { name } = payLoad
    /** clear the previous data  */
    yield put(getArtistEventsSuccess([]))
    var response = yield call(getArtistEvents, name)
    if(response instanceof Error){
        yield put(getArtistEventsFailure(response.message))
    }
    else{
        yield put(getArtistEventsSuccess(response))
    }
    yield put(isInAjaxCall(false))
}

module.exports = getArtistEventSaga

