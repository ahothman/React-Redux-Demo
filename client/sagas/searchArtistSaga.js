var { take, put, call} = require('redux-saga/effects')
var actionTypes = require('../actionTypes')
var { searchArtistFailure, searchArtistSuccess }  = require('../actions/artisitActions.js')
var { getArtistEvents }  = require('../actions/artistEventsActions.js')
var { getArtistByName } = require('../api')


function* SearchArtistSaga(payload){
    var { name } = payload
    var response = yield call(getArtistByName,name)
    if(response instanceof Error){
        yield put(searchArtistFailure(response.message))
    }
    else{
        yield put(getArtistEvents(name))
        yield put(searchArtistSuccess(response))
    }
}

module.exports = SearchArtistSaga

