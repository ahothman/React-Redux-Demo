function getSavedState(){
   var state = localStorage.getItem('state')
   if(state == null){
       return undefined
   }
  return JSON.parse(state)
}

function saveState(state){
   localStorage.setItem('state',JSON.stringify(state))
}

module.exports = {
    saveState,
    getSavedState
}