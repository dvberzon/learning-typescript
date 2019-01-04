"use strict";
// https://www.typescriptlang.org/docs/handbook/classes.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message.toString();
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeterObj = new Greeter(1);
console.log(greeterObj.greet());
{
    var Animal_1 = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal_1));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal_1));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
}
{
    var Animal_2 = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        return Animal;
    }());
    //new Animal("Cat").name; // Error: 'name' is private;
}
// public private with inheritance
{
    var Animal_3 = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        return Animal;
    }());
    var Rhino = /** @class */ (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, "Rhino") || this;
        }
        return Rhino;
    }(Animal_3));
    var Employee = /** @class */ (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal = new Animal_3("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino;
    //animal = employee; // Error: 'Animal' and 'Employee' are not compatible
    // so even though they both have a name, because it's private they are not compatible
}
// protected
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.greet = function (stranger) {
            return "Hi " + stranger + ", my name is " + this.name;
        };
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var howard = new Employee("Howard", "Sales");
    var whoward = new Person('bob');
    console.log(howard.getElevatorPitch());
    console.log(whoward.greet('howard'));
    // console.log(howard.name); // error.
    // although howard can access name, it is protected
}
{
    var Person = /** @class */ (function () {
        function Person(theName) {
            this.name = theName;
        }
        return Person;
    }());
    // Employee can extend Person
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var howard = new Employee("Howard", "Sales");
    //let john = new Person("John"); // Error: The 'Person' constructor is protected
}
{
    var Octopus_1 = /** @class */ (function () {
        function Octopus(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
        return Octopus;
    }());
    var dad = new Octopus_1("Man with the 8 strong legs");
    //dad.name = "Man with the 3-piece suit"; // error! name is readonly.
}
{
    var Octopus_2 = /** @class */ (function () {
        // you can do this to define a property and assign it from incoming thing
        function Octopus(name) {
            this.name = name;
        }
        return Octopus;
    }());
    var octo_1 = new Octopus_2('This was instantiated using the syntax `constructor(public name: string)`');
    console.log(octo_1.name);
}
{
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
{
    var passcode_1 = "secret passcode";
    var Employee = /** @class */ (function () {
        function Employee() {
            this._fullName = "";
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode_1 && passcode_1 == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
// static
{
    var Grid_1 = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid_1(1.0); // 1x scale
    var grid2 = new Grid_1(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(Grid_1.origin);
}
