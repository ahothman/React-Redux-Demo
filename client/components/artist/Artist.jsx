var React = require('react')
var { Component } = React
var { connect } = require('react-redux')
var actions  = require('../../actions/artisitActions.js')


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
  render(){
      var { artist, events } = this.props
      return <div clssNAme="containter">
                <div>
                    <input type ="text" onChange={this.onChange}/>
                    <button onClick={this.search}>search</button>
                </div>
                <h1>{artist.id}</h1>
                {events.map(e=><div>{e.id}</div>)}
            </div>
  }
}

function  mapStateToProps(state){
    return {
        artist: state.artist,
        events: state.events
    }
}

function mapDispatchToProps(dispatch){
    return {
        searchArtist:(name)=>dispatch(actions.searchArtist(name))
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Artist)