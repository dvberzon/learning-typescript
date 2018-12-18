class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));
console.log(user.firstName, user.middleInitial, user.lastName, user.fullName);

const user2 = {firstName: 'bob', lastName: 'simon', hungryCatapilar: 'good book'}

console.log(greeter(user2));

let bob = "hello";

function hey(array: Array<string|number> ){
    console.log(array);
}

console.log(hey([1,2,3]));
console.log(hey(['a','b','c']));
console.log(hey([1,'b',3]));
console.log(hey([1,null,3]));

