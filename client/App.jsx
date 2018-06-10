var React = require('react')
var { render } = require('react-dom')
var { Provider } = require('react-redux')
var store = require('./store')
var Artist = require('./components/artist')

render(<Provider store={store}>
            <Artist/>    
        </Provider>,
    
    document.getElementById('app'))