// https://www.typescriptlang.org/docs/handbook/interfaces.html

function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj); // Note the duck typing. TS doesn't care if 'size' is there as an extra param

