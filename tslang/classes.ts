// https://www.typescriptlang.org/docs/handbook/classes.html

class Greeter {
  greeting: string; // this is typescript new syntax for declaring a property
  constructor(message: number) {
    this.greeting = message.toString();
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeterObj = new Greeter(1);

console.log(greeterObj.greet());
{
  class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }

  class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }

  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");

  sam.move();
  tom.move(34);
}
{
  class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  //new Animal("Cat").name; // Error: 'name' is private;
}
// public private with inheritance
{
  class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  class Rhino extends Animal {
    constructor() { super("Rhino"); }
  }

  class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  let animal = new Animal("Goat");
  let rhino = new Rhino();
  let employee = new Employee("Bob");

  animal = rhino;
  //animal = employee; // Error: 'Animal' and 'Employee' are not compatible
  // so even though they both have a name, because it's private they are not compatible
}
// protected
{
  class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
    public greet(stranger: string){
      return `Hi ${stranger}, my name is ${this.name}`;
    }
  }

  class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }

  let howard = new Employee("Howard", "Sales");
  let whoward = new Person('bob');
  console.log(howard.getElevatorPitch());
  console.log(whoward.greet('howard'));
  // console.log(howard.name); // error.
  // although howard can access name, it is protected
}
{
  class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
  }

  // Employee can extend Person
  class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }

  let howard = new Employee("Howard", "Sales");
  //let john = new Person("John"); // Error: The 'Person' constructor is protected
}
{
  class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
      this.name = theName;
    }
  }
  let dad = new Octopus("Man with the 8 strong legs");
  //dad.name = "Man with the 3-piece suit"; // error! name is readonly.
}
{

  class Octopus {
    // you can do this to define a property and assign it from incoming thing
    constructor(public name: string) { 
    }
  }

  const octo = new Octopus('This was instantiated using the syntax `constructor(public name: string)`');
  console.log(octo.name);
}
{
  class Employee {
    fullName: string;
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    console.log(employee.fullName);
  }
}
{
  let passcode = "secret passcode";

  class Employee {
    private _fullName: string = "";

    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      }
      else {
        console.log("Error: Unauthorized update of employee!");
      }
    }
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    console.log(employee.fullName);
  }
}

// static
{
  class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
  }

  let grid1 = new Grid(1.0);  // 1x scale
  let grid2 = new Grid(5.0);  // 5x scale

  console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
  console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
  console.log(Grid.origin);
}