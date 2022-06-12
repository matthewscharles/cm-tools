/**
 * 
 * @param {string} type 
 * @param {object} obj 
 * @returns {HTMLElement} 
 */

CM.prototype.createNS = function(type, obj){
    let element = document.createElementNS(xmlns, type)
    this.set(element, obj)
    return element
}