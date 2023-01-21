/**
 * 
 * @param {HTMLElement | string} element object or id of object to find in DOM
 * @param {string} attribute 
 * @param {array} events 
 * @param {number} duration 
 * @param {object} parameters 
 * @returns HTMLElement
 */

function addAnimation(element,attribute,events,duration,parameters={}){
    let domElement = typeof element == 'object' ? element : document.getElementById(element)
    // console.log('id' in parameters)
    if(!('id' in parameters))parameters['id'] = `${domElement.id}_${attribute}`
    let animation = cm.createAnimation(attribute,events,duration,parameters)
    domElement.appendChild(animation);
    return animation
}

export default addAnimation;