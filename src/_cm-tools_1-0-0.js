// External toolbox by Charles Matthews 2022

/**
 * CM tools
 * @class
 */
function CM(){

}

CM.prototype = {};
CM.prototype.constructor = CM;



cm.createAnimation = function(attribute,events,duration,parameters={}){
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

cm.addAnimation = function(element,attribute,events,duration,parameters={}){
    let domElement = typeof element == 'object' ? element : document.getElementById(element)
    // console.log('id' in parameters)
    if(!('id' in parameters))parameters['id'] = `${domElement.id}_${attribute}`
    let animation = cm.createAnimation(attribute,events,duration,parameters)
    domElement.appendChild(animation);
    return animation
}

function interpolate(a, b, n) {
  return ((1 - n) * a) + (n * b);
}

function notify(...args){
  if (settings.verbose) {
    let message = '';
    for (let item of args){
      message+=item + ' ';
    }
    console.log(message);
  }
}

function apply(source, target){
  Object.entries(source).forEach((x)=>{
    target.setAttribute(...x)
  })
  for (let item of Object.keys(source)){
    target.setAttribute(item, source[item])
  }
}

function getTransformType(element){
  return element.getAttribute('transform').split("(")[0]
}

function includesScale(element){
  let testSplit = element.getAttribute('transform').includes('scale');
  return testSplit;
}

function getScale(element){
    let scaleValue = element.getAttribute('transform').split('scale').slice(-1)[0].replace(/[\(\)']+/g,'')
    scaleValue = parseFloat(scaleValue);
    return scaleValue;
}

function getTransformArray(element){
  if (getTransformType(element) == 'translate'){
    if (includesScale(element)){
      return element.getAttribute('transform').split("(")[1].split(")")[0].split(" ");
    } else {
        return element.getAttribute('transform').split("(")[1].split(")")[0].split(" ");
    }

  } else if (getTransformType(element) == 'matrix'){
    return element.getAttribute('transform').split("(")[1].split(")")[0].split(" ").slice(-2)
  }
}


function createE(type,attributes){
  var addr = document.createElementNS(xmlns, type);
  Object.entries(attributes).forEach((x)=>addr.setAttribute(...x))
  return addr
} 

