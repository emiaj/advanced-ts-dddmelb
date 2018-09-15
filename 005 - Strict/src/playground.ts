
import { Person } from './domain';

const person = new Person('John Doe', 28);

console.log('Person name:', person.name.toLocaleLowerCase());
console.log('Person age:', person.age.toString());

