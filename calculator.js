function addab(a, b) {
  return a + b;
}
const subtract = function (a, b) {
  return a - b;
};
const multiply = (a, b) => a * b;
const divide = (a, b) =>
  b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero";

function calculate() {
  let num2Input = document.getElementById("num2").value;
  let num3Input = document.getElementById("num3").value;
  let operation = document.getElementById("operation").value;
  let result;

  // Input validation
  if (num2Input === "" || num3Input === "") {
    document.getElementById("output7").innerHTML = "Please enter both numbers.";
    return;
  }

  let num2 = parseFloat(num2Input);
  let num3 = parseFloat(num3Input);

  if (isNaN(num2) || isNaN(num3)) {
    document.getElementById("output7").innerHTML =
      "Please enter valid numbers.";
    return;
  }

  switch (operation) {
    case "add":
      result = addab(num2, num3);
      break;
    case "subtract":
      result = subtract(num2, num3);
      break;
    case "multiply":
      result = multiply(num2, num3);
      break;
    case "divide":
      result = divide(num2, num3);
      break;
    default:
      result = "Invalid Operation";
  }

  document.getElementById(
    "output7"
  ).innerHTML = `Result: <strong>${result}</strong>`;
}
