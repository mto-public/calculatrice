console.log("Hello wilders!");

var firstValue = 1;
var operator = "+";
var secondValue = 2;

console.log("firstValue :", firstValue);
console.log("operator :", operator);
console.log("secondValue :", secondValue);

firstValue = prompt("Entrez la première valeur :");
secondValue = prompt("Entrez la deuxième valeur :");

console.log("Nouvelle valeur de firstValue :", firstValue);
console.log("Nouvelle valeur de secondValue :", secondValue);

firstValue = parseFloat(firstValue);
secondValue = parseFloat(secondValue);

console.log("firstValue + secondValue :", firstValue + secondValue);