var actionTypes = require('../actionTypes')

function getArtistEvents(name){
   return{type:actionTypes.GET_ARTIST_EVENTS, name}
}

function getArtistEventsSuccess(events){
    return {type:actionTypes.GET_ARTIST_EVENTS_SUCCESS, events}
}

function getArtistEventsFailure(message){
    return {type:actionTypes.GET_ARTIST_EVENTS_FAILURE, message}
}

module.exports = {
    getArtistEvents,
    getArtistEventsSuccess,
    getArtistEventsFailure
}