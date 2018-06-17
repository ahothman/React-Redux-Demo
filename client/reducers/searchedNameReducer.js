var actionTypes = require('../actionTypes')

function SearchedNameReducer(state='', action){
    switch(action.type){
        case actionTypes.SET_ARTIST_NAME:
          return action.artistName
        default:
           return state
    }
}

module.exports = SearchedNameReducer