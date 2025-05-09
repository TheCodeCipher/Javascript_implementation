function displayValues() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const isStudentYes = document.getElementById("studentYes").checked;
  const isStudentNo = document.getElementById("studentNo").checked;

  let studentStatus = "Not specified";
  if (isStudentYes) {
    studentStatus = "Yes";
  } else if (isStudentNo) {
    studentStatus = "No";
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p><strong>Name:</strong> ${name ? name : "Not provided"}</p>
    <p><strong>Number:</strong> ${number ? number : "Not provided"}</p>
    <p><strong>Are you a student?</strong> ${studentStatus}</p>
  `;
}
