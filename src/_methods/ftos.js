/**
 * **F**requency **To** **S**tring
 * @param {number} freq - Frequency in HZ
 * @param {number} transpose - offset in semitones
 * @returns {string} Pitch as scientific notation
 */

CM.prototype.ftos = function(frequency, transpose = 0){
    sym = Tone.Frequency(frequency).transpose(transpose)
    return Tone.Frequency(frequency).toNote()
}