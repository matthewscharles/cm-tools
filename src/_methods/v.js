/**
 * Convert gain to dB
 * @param {number} num - Value range 0-1
 * @returns {string} - Value in decibels (0 = '-Infinity')
 */

CM.prototype.v = function(gain){
    return Tone.gainToDb(gain)
}