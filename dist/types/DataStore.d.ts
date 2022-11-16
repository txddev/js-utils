export declare class DataStore {
    static put(element: HTMLElement, key: object, obj: any): void;
    static get(element: HTMLElement, key: object): any;
    static has(element: HTMLElement, key: object): any;
    static remove(element: HTMLElement, key: object): any;
    static lock(element: HTMLElement, key: object, callback: () => any): any | false;
}
