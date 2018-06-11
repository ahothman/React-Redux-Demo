var actionTypes = require('../actionTypes');

module.exports = function productsReducer(state = false, action){
  switch(action.type){
    case actionTypes.IS_IN_AJAX_CALL:
      return action.inAjaxCall;
    default:
      return state;
  }
}