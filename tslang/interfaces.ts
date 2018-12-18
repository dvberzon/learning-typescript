// https://www.typescriptlang.org/docs/handbook/interfaces.html

interface LabelledValue {
  label: string;
  name: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {name: 'henry', size: 10, label: "Size 10 Object"}; // note order doesn't matter
printLabel(myObj);