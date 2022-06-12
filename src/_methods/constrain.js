/**
 * Constrain within range
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} constrained value
 */

CM.prototype.constrain = function(value, min, max, integer = false){
    value = integer ? Math.floor(value) : value;
    return value > max ? max : value < min ? min : value;
}