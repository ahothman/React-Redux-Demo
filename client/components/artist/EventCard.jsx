var React  = require('react')
var moment = require('moment')

var EventCard = ({url, datetime, venue})=>{
    return <a href={url} className="event-card" target="_blank">
             <div className="event-desc max-width">{venue.name}</div>
             <div>{venue.city}</div>
             <div>{venue.country}</div>
             <div className="event-date">{moment(datetime).format('YYYY-MM-DD')}</div>
           </a>
 }

 module.exports = EventCard