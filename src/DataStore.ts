const _storage =  new WeakMap()

export class DataStore {
    static put(element: HTMLElement, key: object, obj: any) {
        if (!_storage.has(element)) {
            _storage.set(element, new Map());
        }
        _storage.get(element).set(key, obj);
    }
    
    static get(element: HTMLElement,  key: object) {
        return _storage.get(element).get(key);
    }
    
    static has(element: HTMLElement,  key: object) {
        return _storage.has(element) && _storage.get(element).has(key);
    }
    
    static remove(element: HTMLElement,  key: object) {
        var ret = _storage.get(element).delete(key);
        if (_storage.get(element).size !== 0) {
            _storage.delete(element);
        }
        return ret;
    }
    
    static lock(element: HTMLElement, key: object,callback: () => any ): any|false {
        if(!DataStore.has(element,key)){
            DataStore.put(element,key,true)
            return callback()
            
        }
        return false
    }
}

if(import.meta.env.DEV || import.meta.env.DATASTORE_DEBUG){
    (<any>window).__Store = _storage
}