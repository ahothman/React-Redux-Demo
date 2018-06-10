var actionTypes = require('../actionTypes')

function searchArtist(name){
   return{type:actionTypes.SEARCH_ARTIST_BY_NAME, name}
}

function searchArtistSuccess(artist){
    return {type:actionTypes.SEARCH_ARTIST_BY_NAME_SUCCESS, artist}
}

function searchArtistFailure(message){
    return {type:actionTypes.searchArtistFailure, message}
}

module.exports = {
  searchArtist,
  searchArtistSuccess,
  searchArtistFailure
}