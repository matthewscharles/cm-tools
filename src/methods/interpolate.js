/**
 * interpolate between two values
 * @param {number} start start point
 * @param {number} end end point
 * @param {number} n range 0-1
 * @returns {number}
 */

cm.prototype.interpolate = function(start, end, n) {
    return ((1 - n) * start) + (n * end);
}