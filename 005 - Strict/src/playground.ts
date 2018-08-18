
import { Person } from './domain';

const person = new Person();

console.log('Person name:', person.name.toLocaleLowerCase());
console.log('Person age:', person.age.toString());

