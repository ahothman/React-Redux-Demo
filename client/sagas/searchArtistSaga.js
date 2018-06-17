var { take, put, call} = require('redux-saga/effects')
var actionTypes = require('../actionTypes')
var { searchArtistFailure, searchArtistSuccess }  = require('../actions/artisitActions.js')
var { getArtistEvents }  = require('../actions/artistEventsActions.js')
var { isInAjaxCall }  = require('../actions/ajaxActions')
var { getArtistByName } = require('../api')


function* SearchArtistSaga(payload){
    var { name } = payload
    /** clear the previous data  */
    yield put(isInAjaxCall(true))
    yield put(searchArtistSuccess(null))
    var response = yield call(getArtistByName,name)
    if(response instanceof Error){
        yield put(searchArtistFailure(response.message))
        yield put(isInAjaxCall(false))
    }
    else{
        yield put(getArtistEvents(name))
        yield put(searchArtistSuccess(response))
    }
}

module.exports = SearchArtistSaga

