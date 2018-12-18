var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
console.log(user.firstName, user.middleInitial, user.lastName, user.fullName);
var user2 = { firstName: 'bob', lastName: 'simon', hungryCatapilar: 'good book' };
console.log(greeter(user2));
var bob = "hello";
function hey(array) {
    console.log(array);
}
console.log(hey([1, 2, 3]));
console.log(hey(['a', 'b', 'c']));
console.log(hey([1, 'b', 3]));
console.log(hey([1, null, 3]));
