var React = require('react')
var { Component } = React
var { connect } = require('react-redux')
var actions  = require('../../actions/artisitActions.js')
var styles =  require('../../styles/index.scss')
var ArtistCard = require('./ArtistCard.jsx')
var EventCard = require('./EventCard.jsx')
var Loader = require('../common/Loader.jsx')



class Artist extends Component {
  constructor(props){
      super(props)
      this.state = {
          artistName:''
      }
      this.onChange  = this.onChange.bind(this)
      this.search = this.search.bind(this)
  }
  
 onChange(e){
    var artistName = e.target.value
    this.setState({ artistName })
 }

 search(){
     var { artistName } = this.state,
         { searchArtist } = this.props
    
      searchArtist(artistName)
 }

 getResponse(){
    var { isInAjaxCall, artist, events  } =  this.props
    if(isInAjaxCall){
        return <Loader/>
    }
    else{
        return  <div id="result">
                     <div id="artist">
                         {artist.hasOwnProperty('id') && <ArtistCard artist={artist}/>}
                     </div>
                     <div id="events">
                          {events.map(e=><EventCard {...e}/>)}
                     </div>
                 </div>
    }
 }
  render(){
      var response = this.getResponse()
      
      return <div className="containter">
                <div className="search-artist">
                    <input type ="text" placeholder="Search Artist" className="custom-input search-text" onChange={this.onChange}/>
                    <button className="btn search-btn" onClick={this.search}>search</button>
                </div>
               {response}
            </div>
  }
}

function  mapStateToProps(state){
    return {
        artist: state.artist,
        events: state.events,
        isInAjaxCall: state.isInAjaxCall,
    }
}

function mapDispatchToProps(dispatch){
    return {
        searchArtist:(name)=>dispatch(actions.searchArtist(name))
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Artist)