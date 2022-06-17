CM.prototype.hexToInt = function(input1) {
    //string with two digit hex
    let value = [0, 0];
    for (let i =0;i<2;i++) {
        console.log(i)
        console.log(input1.charCodeAt(i))
        value[i] = input1.charCodeAt(i);
        console.log(value[i])
        value[i] -= value[i] >= 65 ? 55: 48;
    }
    value[0] *= 16;
    let newValue = value[0] + value[1];
    return newValue;
}
// input / 16 and input % 16

CM.prototype.intToHex = function(input){
    let output=[0,0];
    output[0] = Math.floor(input/16);
    output[1] = input % 16
    for (let index in output){
        output[index] = output[index] > 9 ? String.fromCharCode(output[index] + 55) : output[index];
    }
    return `${output[0]}${output[1]}`
}