var app_id = 'secret'

function getArtistByName(name){
    return fetch(`https://rest.bandsintown.com/artists/${name}?app_id=${app_id}`)
          .then(res=>res.json())
          .then(data=>{
              /** avoid returning wrong type */
              if(typeof(data) != 'object'){
                return null
              }
              return data   
          })
          .catch(err=>err)
}

function getArtistEvents(name){
    return fetch(`https://rest.bandsintown.com/artists/${name}/events?app_id=${app_id}`)
          .then(res=>res.json())
          .then(data=>{
            /** avoid returning wrong type */
            if(!Array.isArray(data)){
              return []
            }
            return data   
        })
       .catch(err=>err)
}


module.exports = {
    getArtistByName,
    getArtistEvents
}