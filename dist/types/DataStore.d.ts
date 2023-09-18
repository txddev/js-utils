export declare class DataStore {
    static put(element: HTMLElement, key: object, obj: any): void;
    static get(element: HTMLElement, key: object): any;
    static has(element: HTMLElement, key: object): any;
    static remove(element: HTMLElement, key: object): any;
    static lock<T>(element: HTMLElement, key: object, callback: () => T): T | false;
    static lockAsync<T>(element: HTMLElement, key: object, callback: () => Promise<T>): Promise<T | false>;
}
