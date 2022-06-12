/**
 * Rotate an array
 * @param {array} array 
 * @param {number} amount 
 * @returns {array}
 */

CM.prototype.rot = function(array, amount){
    let output = [array.slice(amount), array.slice(0,amount)]
    return output[0].concat(output[1]);
  }