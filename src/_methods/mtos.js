/**
 * **M**IDI **To** **S**ymbol
 * @method CM#mtos
 * @param {number} num        - MIDI pitch
 * @param {number} transpose  - offset in semitones
 * @returns {string} Pitch as scientific notation
 */

 CM.prototype.mtos= function(num, transpose = 0){
    num = Tone.Frequency(num, "midi").transpose(transpose);
    return Tone.Frequency(num, "midi").toNote();
}
