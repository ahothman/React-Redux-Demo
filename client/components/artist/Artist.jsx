var React = require('react')
var { Component } = React
var { connect } = require('react-redux')
var actions  = require('../../actions/artisitActions.js')
var styles =  require('../../styles/index.scss')
var ArtistCard = require('./ArtistCard.jsx')
var EventCard = require('./EventCard.jsx')
var Loader = require('../common/Loader.jsx')
var NoResult = require('./NoResult.jsx')
var Search = require('../common/Search.jsx')

class Artist extends Component {
  constructor(props){
      super(props)
      this.state = {
          showNoResult:false
      }
      this.search = this.search.bind(this)
  }
  
 search(artistName){
     var { searchArtist, setArtistName } = this.props
     this.setState({
         showNoResult:true
      })
       /**
      * presist the last searched value to the local storage.
      */
      setArtistName(artistName)
      searchArtist(artistName)
 }

 getResponse(){
    var { isInAjaxCall, artist, events } =  this.props  
    var { showNoResult } = this.state  

    if(isInAjaxCall){
        return <Loader/>
    }
    else if(artist == null && showNoResult){
        return <NoResult/>
    }
    else{
        return  <div id="result">
                     <div id="artist">
                          {artist!=null && <ArtistCard artist={artist}/>}
                     </div>
                     <div id="events">
                          {events.map(e=><EventCard {...e}/>)}
                     </div>
                 </div>
    }
 }
  render(){
      var response = this.getResponse()
      var { artistName } = this.props

      return <div className="containter">
                <Search value={artistName} onSearch={this.search}/>
                {response}
            </div>
  }
}

function  mapStateToProps(state){
    return {
        artist: state.artist,
        events: state.events,
        artistName:state.lastSearchedName,
        isInAjaxCall: state.isInAjaxCall
    }
}

function mapDispatchToProps(dispatch){
    return {
        searchArtist:(name)=>dispatch(actions.searchArtist(name)),
        setArtistName:(artistName)=>dispatch(actions.setArtistName(artistName))
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Artist)