let getOption = prompt("Оберіть дію (add, sub, mult, div)")
	.trim()
	.toLowerCase();
let firstNumber = +prompt("Введіть перше число").trim();
let secondNumber = +prompt("Введіть друге число").trim();

if (getOption === "add") {
	alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (getOption === "sub") {
	alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (getOption === "mult") {
	alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (getOption === "div") {
	alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
} else {
	alert("Помилка.");
}
