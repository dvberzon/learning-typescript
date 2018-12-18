// this is going through the handbook bit by bit. So starting on 
let x: [string, number];

x = ['hello', 10];

console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
console.log(x[1]);

enum Color {Red=1, Green, Blue};
let c: Color = Color.Green; // = 2
if(c > 0){
   let colorname : String = Color[2];
   console.log(colorname)
}

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
strLength = (someValue as string).length; // or this

let myTuple = ["bob",2,"colon"];

myTuple.push('Henry');
myTuple.push(2);

type Point = [number, number?, number?];

const ax: Point = [10];
const axy: Point = [10, 20];
const axyz: Point = [10, 20, 10];

console.log(ax.length);
console.log(axy.length);
console.log(axyz.length);

