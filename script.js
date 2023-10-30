let getOption = prompt("Оберіть дію (add, sub, mult, div)");
let firstNumber = +prompt("Введіть перше число");
let secondNumber = +prompt("Введіть друге число");

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
