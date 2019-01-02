"use strict";
// https://www.typescriptlang.org/docs/handbook/interfaces.html
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
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var thing = { colour: 'black', width: 100 };
var mySquare = createSquare(thing); // fine
var anotherThing = { colour: 'black', width: 100 }; // also fine (yuck!)
anotherThing = mySquare; // also fine, which is horrid
// BUT
//let anotherSquare = createSquare({ colour: 'black', width: 100 }); // doesn't like this
var yetAnotherSquare = createSquare({ colour: 'black', width: 100 }); // doesn't like this
var finalThing = { aNum: 1, aString: 'bob', somethingElse: true }; // fine
// note param names don't have to match, also don't have to explicitly state return type
var mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myThing = {
    num: 1,
    aFunc: function (param) { return true; }
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
// can only have string or number
// or both in very wierd circumstances...
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var anArray = ["Alice", "Bob"];
//anArray[2] = "Mallory"; // error! -- super wierd!
// Class interfaces
{ // adding a block scope here to avoid name clashes further down the file
    // implements indicates that it obeys an interface
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
}
// this is a function that needs to have a constructor of the right interface. Looks like this is the only way to type a constructor!
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
// extending interfaces
{
    var square = {}; // what is this syntax they've just dropped on us?
    console.log(square);
    square.color = "blue";
    square.sideLength = 10;
}
// multi interface extension
{
    var square = {}; // i think this is the same as <Square>{}, but I need to check
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
}
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
{
    var Control = /** @class */ (function () {
        function Control() {
        }
        return Control;
    }());
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Button.prototype.select = function () { };
        return Button;
    }(Control));
    var TextBox = /** @class */ (function (_super) {
        __extends(TextBox, _super);
        function TextBox() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextBox.prototype.select = function () { };
        return TextBox;
    }(Control));
    // Error: Property 'state' is missing in type 'Image'.
    /*class Image implements SelectableControl {
      select() { }
    }
  */
    var Location_1 = /** @class */ (function () {
        function Location() {
        }
        return Location;
    }());
}
// this is just wierd stuff
