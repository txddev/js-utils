// DOM exploration

export function offset (element: HTMLElement) : { top:number, left:number, width: number | null, height: number | null }{
    if(element == null) return {top:0,left:0,width:null,height:null}
    let rect = element.getBoundingClientRect();

    return { 
        top: rect.top + window.scrollY, 
        left: rect.left + window.scrollX, 
        width: rect.width,
        height: rect.height
    };
}

export function getParents (el: HTMLElement, parentSelector: string|HTMLElement|Document|null) {
    if (parentSelector === undefined) {
        parentSelector = window.document;
    }
    var parents = [];
    var p = el.parentNode;
    
    while (p!= null && p instanceof HTMLElement  && !(parentSelector instanceof HTMLElement && p === parentSelector) && !(typeof parentSelector == "string" && (p as HTMLElement).matches(parentSelector as unknown as string))) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    if(p != null) parents.push(p);
    return parents;
}

export function wrap (toWrap: HTMLElement, wrapper: HTMLElement|null) {
    wrapper = wrapper || document.createElement('div');
    toWrap.after(wrapper);
    return wrapper.appendChild(toWrap);
}

export function empty (element: HTMLElement) : void {
    var children = Array.prototype.slice.call(element.childNodes);
    children.forEach(function (child) {
      element.removeChild(child);
    });  
}

