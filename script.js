let getOption = prompt("Оберіть дію (add, sub, mult, div)")
	.trim()
	.toLowerCase();
let firstNumber = +prompt("Введіть перше число").trim();
let secondNumber = +prompt("Введіть друге число").trim();
let checkIsNaN = !isNaN(firstNumber) && !isNaN(secondNumber);

if (getOption === "add" && checkIsNaN) {
	alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (getOption === "sub" && checkIsNaN) {
	alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (getOption === "mult" && checkIsNaN) {
	alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (getOption === "div" && checkIsNaN) {
	alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
} else {
	alert("Помилка.");
}
