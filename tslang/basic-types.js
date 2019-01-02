"use strict";
// this is going through the handbook bit by bit. So starting on 
// https://www.typescriptlang.org/docs/handbook/basic-types.html
var x;
x = ['hello', 10];
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
console.log(x[1]);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green; // = 2
if (c > 0) {
    var colorname = Color[2];
    console.log(colorname);
}
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var someValue = "this is a string";
var strLength = someValue.length;
strLength = someValue.length; // or this
var myTuple = ["bob", 2, "colon"];
myTuple.push('Henry');
myTuple.push(2);
var ax = [10];
var axy = [10, 20];
var axyz = [10, 20, 10];
console.log(ax.length);
console.log(axy.length);
console.log(axyz.length);
