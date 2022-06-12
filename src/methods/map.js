/**
 * Scaling
 * Convert the incoming value from original range (x1 to y1) to target range (x2-y2)
 * @param {number} value 
 * @param {number} x1           input minimum
 * @param {number} y1           input maximum
 * @param {number} x2           output minimum
 * @param {number} y2           output maximum
 * @param {boolean} constrain   constrain to range?
 * @param {boolean} integer     convert to integer?
 * @returns {number}            mapped value
 */

CM.prototype.map = function(value, x1, y1, x2, y2, constrain = false, integer = false){
    value = (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    value = integer ? Math.floor(value) : value;
    return constrain ? this.constrain(value,x2,y2) : value;
  }