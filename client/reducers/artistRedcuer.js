var actionTypes = require('../actionTypes')

function artistRducer(state={}, action){
    switch(action.type){
        case actionTypes.SEARCH_ARTIST_BY_NAME_SUCCESS:
          return action.artist
        default:
           return state
    }
}

module.exports = artistRducer