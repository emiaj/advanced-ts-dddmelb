
export class Builder<T extends any = {}> {
    constructor(private obj: T = null) {
    }

    extend<E>(extension: E): Builder<T & E> {
        return new Builder(Object.assign({}, this.obj, extension));
    }

    build(): T {
        return this.obj;
    }
}
