/** 
   * mtof
   * 
   * @param {*} num 
   * @param {*} transpose 
   * @returns {number} frequency in Hz
   */

 CM.prototype.mtof = function(num, transpose = 0){
    num = Tone.Frequency(num, "midi").transpose(transpose)
    return Tone.Frequency(num, "midi").toFrequency()
  }