// https://www.typescriptlang.org/docs/handbook/interfaces.html

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let thing = {colour: 'black', width: 100}

let mySquare = createSquare(thing); // fine

let anotherThing :SquareConfig = {colour: 'black', width: 100} as SquareConfig; // also fine (yuck!)

anotherThing = mySquare; // also fine, which is horrid

// BUT
//let anotherSquare = createSquare({ colour: 'black', width: 100 }); // doesn't like this
let yetAnotherSquare = createSquare({ colour: 'black', width: 100 } as SquareConfig); // doesn't like this
// Object literals as PARAMETERS are treated differently. excess type checking is done

// you can also allow other prop types explicitly
interface AnotherSquareConfig {
  aNum: number;
  aString: string;
  [propName: string]: any; // wierd syntax to be discussed later
}

let finalThing :AnotherSquareConfig = {aNum: 1, aString: 'bob', somethingElse: true} // fine

// Functions:

interface SearchFunc {
  (source: string, subString: string): boolean;
}

// note param names don't have to match, also don't have to explicitly state return type
let mySearch: SearchFunc = function(src: string, sub: string) { 
  let result = src.search(sub);
  return result > -1;
}

interface ContainsFunction {
  num: number;
  aFunc(param: string): boolean // better function syntax
}

let myThing: ContainsFunction = {
  num: 1,
  aFunc: (param) => { return true}
}

// indexable things

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// can only have string or number
// or both in very wierd circumstances...

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
// below chucks an error because ({"1": 'hi})[1] returns 'hi'. So number indexes have to return a subtype of the string index
// IE object keys are always actually strings, even if defined as numbers.
// {"1": 'no', 1: 'yes'} === {"1": yes}
interface NotOkay {
  //[x: number]: Animal; // chucks error!
  [x: string]: Dog;
}

// error below is caused because obj.name == obj['name']
interface NumberDictionary {
  [index: string]: number;
  length: number;    // ok, length is a number
  //name: string;      // error, the type of 'name' is not a subtype of the indexer
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let anArray: ReadonlyStringArray = ["Alice", "Bob"];
//anArray[2] = "Mallory"; // error! -- super wierd!

// Class interfaces
{ // adding a block scope here to avoid name clashes further down the file
  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
  }

  // implements indicates that it obeys an interface
  class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) { }
  }
}

// constructor interfaces:
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

// this is a function that needs to have a constructor of the right interface. Looks like this is the only way to type a constructor!
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
// extending interfaces
{
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }

  let square = <Square>{}; // what is this syntax they've just dropped on us?
  console.log(square);
  square.color = "blue";
  square.sideLength = 10;
}
// multi interface extension
{
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = {} as Square; // i think this is the same as <Square>{}, but I need to check
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;

}

// hybrid types
interface Counter {
  (start: number): string; // so this is defining the functional aspect of it
  interval: number; // and these define the parameters of the returned object
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

{
  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select(): void;
  }

  class Button extends Control implements SelectableControl {
    select() { }
  }

  class TextBox extends Control {
    select() { }
  }

  // Error: Property 'state' is missing in type 'Image'.
  /*class Image implements SelectableControl {
    select() { }
  }
*/
  class Location {

  }
}
// this is just wierd stuff