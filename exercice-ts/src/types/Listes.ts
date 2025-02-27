export interface ListManager<T> {
    items: T[];
    addItem(item: T): void;
    removeItem(index: number): void;  
    }

