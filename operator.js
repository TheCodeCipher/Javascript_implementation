function performOperations() {
  let a = parseFloat(document.getElementById("inputA").value);
  let b = parseFloat(document.getElementById("inputB").value);

  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = b !== 0 ? (a / b).toFixed(2) : "Infinity (division by zero)";
  let modulus = b !== 0 ? a % b : "Undefined (modulus by zero)";

  let isGreater = a > b;
  let isLess = a < b;
  let isEqual = a === b;
  let isNotEqual = a !== b;
  let isGreaterOrEqual = a >= b;
  let isLessOrEqual = a <= b;
  let logicalAnd = a > 5 && b < 10;
  let logicalOr = a > 5 || b < 10;
  let logicalNot = !(a > b);

  let outputText = `
      <strong>Results:</strong><br>
      Addition (a + b) = ${addition} <br>
      Subtraction (a - b) = ${subtraction} <br>
      Multiplication (a * b) = ${multiplication} <br>
      Division (a / b) = ${division} <br>
      Modulus (a % b) = ${modulus} <br><br>
      Is 'a' greater than 'b'? ${isGreater} <br>
      Is 'a' less than 'b'? ${isLess} <br>
      Is 'a' equal to 'b'? ${isEqual} <br>
      Is 'a' not equal to 'b'? ${isNotEqual} <br>
      Is 'a' greater than or equal to 'b'? ${isGreaterOrEqual} <br>
      Is 'a' less than or equal to 'b'? ${isLessOrEqual} <br><br>
      Logical AND (a > 5 && b < 10): ${logicalAnd} <br>
      Logical OR (a > 5 || b < 10): ${logicalOr} <br>
      Logical NOT (!(a > b)): ${logicalNot}
  `;

  document.getElementById("output1").innerHTML = outputText;
}
