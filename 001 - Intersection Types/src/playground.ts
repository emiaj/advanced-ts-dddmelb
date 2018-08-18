
import { Builder } from "./builder";

const obj = new Builder()
    // Builder<{givenName:string}>
    .extend({ givenName: 'John' })
    // Builder<{givenName:string} & {familyName:string}>
    .extend({ familyName: 'Doe' })
    // Builder<{givenName:string} & {familyName:string} & {age:number}>
    .extend({ age: 28 })
    // {givenName:string} & {familyName:string} & {age:number}
    .build();

console.clear();

console.log(obj.givenName);
console.log(obj.familyName);
console.log(obj.age);

