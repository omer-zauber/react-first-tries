class Person {
    constructor(name = "Anonymus", age = 0) {
        this.name=name.split(' ');
        this.age = age;
    }
    getGreeting() {
        return `Hi, ${this.name.join(' ')}!`
    }
    getDescription() {
        return `${this.name.join(' ')} is ${this.age} years old!`
    }
}

const me = new Person("Omer Zauber");
console.log(me);
console.log(me.getGreeting(),getDescription());

const other = new Person();
console.log(other);
console.log(other.getGreeting(),getDescription());