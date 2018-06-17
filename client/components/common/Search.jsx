var React = require('react')
var { Component } = React
var propTypes = require('prop-types')

class Search extends Component {
  constructor(props){
      super(props)
      var { value } = this.props
      this.state = {
          value
      }
      this.onChange  = this.onChange.bind(this)
      this.search = this.search.bind(this)
  }

  static get propTypes(){
      return {
        value:propTypes.string
      }
  }
  static get defaultProps(){
         return {
           value:'',
           onSearch:()=>{}
         }
  }
  
 onChange(e){
    var value = e.target.value
    this.setState({ value })
 }

 search(){
     var { value } = this.state
     var { onSearch } = this.props
     onSearch(value)
 }

  render(){
      var { value } = this.state

      return <div className="search-artist">
                    <input type ="text" value={value} placeholder="Search Artist" className="custom-input search-text" onChange={this.onChange}/>
                    <button className="btn search-btn" onClick={this.search}>search</button>
             </div>
  }
}

module.exports = Search