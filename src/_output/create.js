// testing...
let cm = new CM();

// console.log(cm.map(1.1, 0, 1, 0, 127, false));
// console.log(cm.interpolate(100, 200, 0.5));

console.log('testing:',cm.hexToInt("ff"));

let output = cm.intToHex(16 + (18 * (1)))
    output += '#ff00ff'.substring(1).toUpperCase();
    // document.querySelector("#lineToSend").value = output;
    console.log('colour output',output)