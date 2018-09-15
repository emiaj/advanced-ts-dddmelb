

export class Person {

    constructor(name: string, age: number) {
       this.init(name, age);
    }

    init(name: string, age: number){
        this.name = name;
        if(age >=0){
            this.age = age;
        }
        else{
            this.age = 0;
        }
    }

    name!: string;
    age!: number;
}

