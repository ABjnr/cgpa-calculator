const totalScoresInputField = document.querySelector("#scores-sum");
const totalUnitsInputField = document.querySelector("#total-units");
const result = document.querySelector("#result");

let totalScoresValue = "";
let totalUnitsValue = "";

const gpaCalcButton = document.querySelector("#calculate-gpa-button");

gpaCalcButton.addEventListener("click", () => {
  totalScoresValue = totalScoresInputField.value;
  totalUnitsValue = totalUnitsInputField.value;

  let parsedScores = parseFloat(totalScoresValue);
  let parsedUnits = parseFloat(totalUnitsValue);

  if (!(isNaN(parsedScores) && isNaN(parsedUnits))) {
    if (isNaN(parsedScores)) {
      result.innerHTML = "Invalid scores input";
    } else if (isNaN(parsedUnits)) {
      result.innerHTML = "Invalid units input";
    } else {
      let answer = (parsedScores / parsedUnits).toFixed(2);

      result.innerHTML = `Your GPA is: ${answer}`;
    }
  } else {
    result.innerHTML = "Invalid input for both scores and unit field";
  }
});
