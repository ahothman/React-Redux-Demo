var React = require('react')

var NoResult = ({message}) =>{
  return <p className="no-result"> { message || 'No Result to show...' }</p>
}

module.exports = NoResult