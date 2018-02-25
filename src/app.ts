interface AnimalInterface {
    privateName: string;
    eat(portions: number) : void;
}
 
class Animal implements AnimalInterface {
    privateName: string;
    constructor(private name: string) {
         name = this.privateName;
    }
    eat(portions: number = 1) {
        console.log(`${this.name} eat ${portions} portions`);
    }
}

const first = new Animal('Cat');
first.eat(3);

const second = new Animal('Dog');
second.eat(5);