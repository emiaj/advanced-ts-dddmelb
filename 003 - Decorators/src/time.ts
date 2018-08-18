export function time(clazz: Function,
    methodName: string,
    methodDescriptor: PropertyDescriptor) {

    const originalMethod = methodDescriptor.value;

    if (originalMethod) {

        methodDescriptor.value = function (...args: any[]) {

            const signature = `${clazz.name}.${methodName}(${args})`;

            console.time(signature);

            const result = originalMethod.apply(clazz, args);

            console.timeEnd(signature);

            return result;
        };
    }

    return methodDescriptor;
}