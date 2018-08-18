
export class Builder<T extends any = {}> {
    constructor(private obj: T = null) {
    }

    extend<V>(value: V): Builder<T & V> {
        return new Builder(Object.assign({}, this.obj, value));
    }

    build(): T {
        return this.obj;
    }
}
