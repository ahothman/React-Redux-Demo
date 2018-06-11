var actionTypes = require('../actionTypes');

function isInAjaxCall(inAjaxCall) {
    return { type: actionTypes.IS_IN_AJAX_CALL ,  inAjaxCall }
}

module.exports = { 
    isInAjaxCall
}