
export function printProp(instance: any, key: string) {
    console.log(instance[key]);
}

export function setProp(instance: any, key: string, value: any) {
    instance[key] = value;
}

