/**
 * interpolate between two values
 * @param {number} start start point
 * @param {number} end end point
 * @param {number} position range 0-1
 * @returns {number}
 */

cm.prototype.interpolate = function(start, end, position) {
    return ((1 - position) * start) + (position * end);
}