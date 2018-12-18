https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

define function types using:

function blah(person: string)

get errors if called with non string, or wrong number of arguments.

No explicit `implements` clause

Type testing is done via duck typing. So for example if you call something which has extra properties, it wont mind!

`public blah: string` is shorthand for 'add a method .blah that returns blah', ie add it as a property

Vs code autocomplete is interesting for this stuff:

https://www.typescriptlang.org/docs/handbook/basic-types.html
- apparently tuples do union if you go outside the index. but that doesn't seem to be true in vscode
let x: [string, number];
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

enum is basically an array of Constants, each representing a number. Can be used for flags or options

- should look into `unknown` and the `is` keyword.

