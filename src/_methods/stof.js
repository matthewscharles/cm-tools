/**
 * **S**tring **To** **F**requency
 * @param {string} sym - Pitch in scientific notation
 * @param {number} transpose - offset in semitones
 * @returns {number} Pitch as MIDI note 
 */

 CM.prototype.stof = function(symbol, transpose = 0){
    symbol = Tone.Frequency(symbol).transpose(transpose)
    return Tone.Frequency(symbol).toFrequency()
  }