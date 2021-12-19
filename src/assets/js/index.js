/* eslint-disable no-undef */
import Calculate from "./Calculate.js";
const calculate = new Calculate();
let value = "";
let result;
const inputValue = document.querySelector("#value");
const send = document.querySelector("#equal");
const resultOperation = document.querySelector("#result_operation");
const historic = document.querySelector("#historic_operation");

document.querySelectorAll(".number").forEach(number =>
  number.addEventListener("click", (event) => {
    if (result) {
      inputValue.textContent = " ";
      value = "";
      result = "";
      resultOperation.classList.add("none");
      inputValue.classList.remove("none");
    }
    value += `${event.target.innerText}`;
    if (inputValue.classList.contains("none")) {
      inputValue.classList.remove("none");
    }
    inputValue.textContent = value;
  })
);

document.querySelectorAll(".operation").forEach(operation =>
  operation.addEventListener("click", (event) => {
    if (!value && !result) {
      return;
    }
    if (event.target.innerText === "AC") {
      calculate.clean();
      result = "";
      value = "";
      inputValue.textContent = "";
      resultOperation.textContent = "";
      historic.textContent = "";
      return;
    }

    if (event.target.innerText === "+-") {
      if (result) {
        result = calculate.convertValue(result);
        inputValue.textContent = result;
        resultOperation.textContent = result;
      } else {
        result = calculate.convertValue(inputValue.textContent);
        inputValue.textContent = result;
        value = result;
      }
      return;
    }

    if (result) {
      value = result;
      resultOperation.classList.add("none");
      inputValue.classList.remove("none");
      result = "";
    }
    value += ` ${event.target.innerText} `;

    inputValue.textContent = value;
  })
);

const showResult = (resultValue, historicValue) => {
  inputValue.classList.add("none");
  resultOperation.classList.remove("none");

  resultOperation.textContent = resultValue;
  historic.textContent = historicValue;

};
resultOperation.addEventListener("click", () => {
  inputValue.textContent = " ";
  resultOperation.classList.add("none");
  inputValue.classList.remove("none");
});

send.addEventListener("click", () => {
  if (validation(inputValue.textContent)) return;
  result = calculate.operation(inputValue.textContent.replace(/,/g, "."));
  showResult(result, calculate.getHistoric());
  value = "";
});


const validation = (value) => {
  if (value.trim().split(" ").length >= 3) {
    return false;
  }
  return true;
};