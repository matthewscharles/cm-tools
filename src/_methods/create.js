/**
 * 
 * @param {string} type 
 * @param {object} obj 
 * @returns {object}
 * @example
 * let newElement = cm.create('p', {
 *    innerHTML:'hello world',
 *    style:{
 *      'font-size':'16px';
 *      }
 *    } 
 * );
 * display.appendChild(newElement)
 */

CM.prototype.create = function(type, obj){
    let element = document.createElement(type)
    this.set(element, obj)
    return element
  }