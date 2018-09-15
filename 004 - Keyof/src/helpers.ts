
export function printProp<T, K extends keyof T>(instance: T, key: K) {
    console.log(instance[key]);
}

export function setProp<T, K extends keyof T, V extends T[K]>(instance: T, key: K, value: V) {
    instance[key] = value;
}

