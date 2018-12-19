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
  aFunc: {
    (param: string): boolean
  };
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
  [x: number]: Animal; // chucks error!
  [x: string]: Dog;
}

// error below is caused because obj.name == obj['name']
interface NumberDictionary {
  [index: string]: number;
  length: number;    // ok, length is a number
  name: string;      // error, the type of 'name' is not a subtype of the indexer
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let anArray: ReadonlyStringArray = ["Alice", "Bob"];
anArray[2] = "Mallory"; // error! -- super wierd!