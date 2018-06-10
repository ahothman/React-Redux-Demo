var app_id = 'secret'

function getArtistByName(name){
    return fetch(`https://rest.bandsintown.com/artists/${name}?app_id=${app_id}`)
          .then(res=>res.json())
          .catch(err=>err)
}

function getArtistEvents(name){
    return fetch(`https://rest.bandsintown.com/artists/${name}/events?app_id=${app_id}`)
          .then(res=>res.json())
          .catch(err=>err)
}


module.exports = {
    getArtistByName,
    getArtistEvents
}