export declare function offset(element: HTMLElement): {
    top: number;
    left: number;
    width: number | null;
    height: number | null;
};
export declare function getParents(el: HTMLElement, parentSelector: string | HTMLElement | Document | null): ParentNode[];
export declare function wrap(toWrap: HTMLElement, wrapper: HTMLElement | null): HTMLElement;
export declare function empty(element: HTMLElement): void;
