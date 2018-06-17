var React = require('react')
var { expect } = require('chai')
var Enzyme = require('enzyme')
var{ shallow } = Enzyme
var Adapter = require('enzyme-adapter-react-16')

var Artist = require('../client/components/artist')
var Search = require('../client/components/common/Search.jsx')

Enzyme.configure({ adapter: new Adapter() })


describe('<Search/>',()=>{
     
      it('value propery default value should be empty string',()=>{
          var search = shallow(<Search/>)
           expect(search.state().value).to.equal('')
      })

      it('should set the state of the component correctly',()=>{
        var search = shallow(<Search value='smith'/>)
        expect(search.state().value).to.equal('smith')
   })

})

 