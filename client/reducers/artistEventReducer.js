var actionTypes = require('../actionTypes')

function artistEventsRducer(state=[], action){
    switch(action.type){
        case actionTypes.GET_ARTIST_EVENTS_SUCCESS:
          return action.events
        default:
           return state
    }
}

module.exports = artistEventsRducer