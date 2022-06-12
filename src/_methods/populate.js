/**
 * 
 * @param menu 
 * @param items 
 * @param selected 
 * @param type 
 */

CM.prototype.populate = function(menu, items, selected=false, type='option'){
    items.forEach((x)=>{
        let item = menu.appendChild(this.create(type,{value:x,innerHTML:x}))
        if(selected!=false)menu.value=selected
    })
}