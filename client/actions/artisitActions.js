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
/** Use Redux to presist the artist name 
 *  so it will be displayed when the page get refreshed
 */
function setArtistName(artistName){
    return {type:actionTypes.SET_ARTIST_NAME, artistName}
}

module.exports = {
  searchArtist,
  setArtistName,
  searchArtistSuccess,
  searchArtistFailure
}