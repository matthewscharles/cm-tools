/**
 * interpolate between two values
 * @param {number} start start point
 * @param {number} end end point
 * @param {number} position range 0-1
 * @returns {number}
 */

CM.prototype.interpolate = function(start, end, position, integer = false) {
    let output = ((1 - position) * start) + (position * end);
    output = integer ? Math.floor(output) : output;
    return output;
}