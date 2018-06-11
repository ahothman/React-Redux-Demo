var React = require('react'
)
var ArtistCard = ({artist})=>{
    return <a className="card" href={artist.url} target="_blank">
               <img src={artist.thumb_url}/>
               <div className="details">
                 <div className="artist-name">{artist.name}</div>
                 <div>
                     <a href={artist.facebook_page_url} target="_blank">
                        <i class="fa fa-facebook-square" style={{color:'#3b5998'}}></i>
                     </a>
                 </div>
               </div>
               
     </a>
 }
 
 module.exports = ArtistCard