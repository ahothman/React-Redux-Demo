var React  = require('react')
var moment = require('moment')

var EventCard = ({url, datetime, venue})=>{
    return <a href={url} className="event-card" target="_blank">
              <div className="event-desc text-truncate">
                   <span>{venue.name}</span>
              </div>
              <div className="text-truncate">
                    <span>{venue.city}</span>
              </div>
              <div className="text-truncate">
                   <span>{venue.country}</span>
              </div>
              <div className="event-date">
                   <span>{moment(datetime).format('YYYY-MM-DD')}</span>
              </div>
           </a>
 }

 module.exports = EventCard