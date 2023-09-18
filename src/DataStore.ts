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
    
    static lock<T>(element: HTMLElement, key: object,callback: () => T ): T|false {
        if(!DataStore.has(element,key)){
            DataStore.put(element,key,true)
            const returnVal = callback()
            if(returnVal !== undefined){
                DataStore.put(element,key,returnVal)
            }
            return returnVal
            
        }
        return false
    }
    static async lockAsync<T>(element: HTMLElement, key: object,callback: () => Promise<T> ): Promise<T|false> {
        if(!DataStore.has(element,key)){
            DataStore.put(element,key,true)
            const returnVal = await callback()
            if(returnVal !== undefined){
                DataStore.put(element,key,returnVal)
            }
            return returnVal
            
        }
        return false
    }
}

if(import.meta.env.DEV || import.meta.env.DATASTORE_DEBUG){
    (<any>window).__Store = _storage
}