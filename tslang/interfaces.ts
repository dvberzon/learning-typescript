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

// BUT
//let anotherSquare = createSquare({ colour: 'black', width: 100 }); // doesn't like this

// Object literals as PARAMETERS are treated differently. excess type checking is done