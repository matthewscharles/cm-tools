/**
 * 
 * @param {string} attribute 
 * @param {array<array<number,number>>} events 
 * @param {number} duration 
 * @param {object} parameters 
 * @returns {HTMLElement}
 */

CM.prototype.createAnimation = function(attribute,events,duration,parameters={}){
    let values = '', times = ''
    events.forEach(([time,value],i)=>{
        if(parseFloat(time) % 1 ==0)time+='.00';
        let divider = i < Object.keys(events).length-1?'; ':'';
        times += `${time}${divider}`;
        values += `${value}${divider}`;
    })
    
    let output = cm.createNS(attribute='translate' ? 'animateTransform' : 'animate',{
        custom:{
            attributeName: attribute,
            begin: 'indefinite',
            repeatCount: '1',
            dur: `${duration}s`,
            fill: 'freeze',
            keyTimes:times,
            values:values
        }
    })
    output = Object.assign(output, parameters)
    return output;
}