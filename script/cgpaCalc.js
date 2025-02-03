const cgpaInputField = document.querySelector("#current-cgpa");
const gpaInputField = document.querySelector("#current-gpa");
const totalCreditUnitField = document.querySelector("#total-credit-units");
const semesterCreditUnitField = document.querySelector(
  "#semester-credit-units"
);
const cgpaCalcButton = document.querySelector("#calculate-cgpa-button");

let cgpaValue = "";
let gpaValue = "";
let semesterCreditValue = "";
let totalCreditValue = "";

const result = document.querySelector("#result");

cgpaCalcButton.addEventListener("click", () => {
  cgpaValue = cgpaInputField.value;
  gpaValue = gpaInputField.value;
  totalCreditValue = totalCreditUnitField.value;
  semesterCreditValue = semesterCreditUnitField.value;

  let parsedCgpa = parseFloat(cgpaValue).toFixed(2);
  let parsedGpa = parseFloat(gpaValue).toFixed(2);
  let parsedTotalUnits = parseInt(totalCreditValue);
  let parsedSemesterUnits = parseInt(semesterCreditValue);

  if (
    !(
      isNaN(parsedCgpa) &&
      isNaN(parsedGpa) &&
      isNaN(parsedSemesterUnits) &&
      isNaN(parsedTotalUnits)
    )
  ) {
    if (isNaN(parsedCgpa)) {
      result.innerHTML = "Invalid input for current CGPA";
    } else if (isNaN(parsedGpa)) {
      result.innerHTML = "Invalid input for current GPA";
    } else if (isNaN(parsedSemesterUnits)) {
      result.innerHTML = "Invalid input for Credit Units";
    } else if (isNaN(parsedTotalUnits)) {
      result.innerHTML = "Invalid input for Total Credit Units";
    } else {
      let newCgpa =
        (parsedCgpa * parsedTotalUnits + parsedGpa * parsedSemesterUnits) /
        (parsedTotalUnits + parsedSemesterUnits);

      let answer = newCgpa.toFixed(2);

      result.innerHTML = `Your CGPA is: ${answer}`;
    }
  } else {
    result.innerHTML = "Invalid input in one or more fields";
  }
});
