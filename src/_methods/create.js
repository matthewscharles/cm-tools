/**
 * 
 * @param {string} type 
 * @param {object} obj 
 * @returns {object}
 */

CM.prototype.create = function(type, obj){
    let element = document.createElement(type)
    this.set(element, obj)
    return element
  }