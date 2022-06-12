/**
 * 
 * @param {HTMLElement} element 
 * @param {object} obj 
 */
CM.prototype.setNS = function(element, obj){
    Object.entries(obj).forEach((x)=>{
      let [index, value] = x;
      switch(index){
        case 'custom':
          Object.entries(value).forEach((y)=>{
            element.setAttributeNS(xmlns,...y)
            // console.log(element)
          });
        break;
        case 'style':
          Object.entries(value).forEach((y)=>element.style[y[0]]=y[1]);
        break;
        default:
          element[index] = value;
      }
    })
  }