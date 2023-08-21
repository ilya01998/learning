export class Stack<T> implements Iterable<T> {
    constructor(private readonly _initialData: T[] = []) {
    }

    get length() {
        return this._initialData.length;
    }

    push(value: T) {
        this._initialData.push(value);
    }

    pop(): T | null {
        return this._initialData.pop() ?? null
    }

    [Symbol.iterator](): Iterator<T> {
        return this._initialData.values();
    }
}
