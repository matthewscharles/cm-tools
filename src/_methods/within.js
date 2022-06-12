/**
 * Check if x and y are within the bounds
 * @param {number} x 
 * @param {number} y 
 * @param {object<string,number>} values 
 * @returns 
 */

CM.prototype.within = function(x=0, y=0, values={left:0,right:0,top:0, bottom:0}){
    let output = x >= values.left && x <= values.right && y >= values.top && y <= values.bottom;
    return output;
}