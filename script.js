const panel = document.querySelector(".panel span");
const numbers = document.querySelectorAll(" .number");
const signs = document.querySelectorAll(".sign");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const percent = document.querySelector(".percent");

var firstValue = "";
var isFirstValue = false;
var secondValue = "";
var isSecondValue = false;
var sign = "";
var resultValue = 0;

function getFirstValue(par) {
  console.log(par);
  panel.innerHTML = "";
  newFunction(par);
  panel.innerHTML = firstValue;
  firstValue = +firstValue;
}
function newFunction(par) {
  firstValue += par;
}

function getSecondValue(par) {
  if (firstValue != "" && sign != "") {
    secondValue += par;
    panel.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}
function getSign() {
  for (let index = 0; index < signs.length; index++) {
    signs[index].addEventListener("click", (e) => {
      sign = e.target.getAttribute("value");
      isFirstValue = true;
    });
  }
}
equals.addEventListener("click", () => {
  panel.innerHTML = "";
  switch (sign) {
    case "+":
      resultValue = firstValue + secondValue;
      break;
    case "-":
      resultValue = firstValue - secondValue;
      break;
    case "/":
      resultValue = firstValue / secondValue;
      break;
    case "X":
      resultValue = firstValue * secondValue;
      break;
  }
  panel.innerHTML = resultValue;
  firstValue = resultValue;
  secondValue = "";
});
function checkResultName() {
  resultValue = JSON.stringify(resultValue);
  if (resultValue <= 8) {
    resultValue = JSON.parse(resultValue);
    panel.innerHTML = resultValue.toFixed(5);
  }
}
percent.addEventListener("click", () => {
  panel.innerHTML = "";
  if (firstValue != "") {
    resultValue = resultValue / 100;
    firstValue = resultValue;
  }
  if (firstValue != "" && secondValue != "" && sign != "") {
    resultValue = resultValue / 100;
  }

  panel.innerHTML = resultValue;
});
clear.addEventListener("click", () => {
  panel.innerHTML = 0;
  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  sign = "";
  resultValue = 0;
});
//main
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    var atr = e.target.getAttribute("value");
    if (isFirstValue === false) {
      getFirstValue(atr);
    }
    if (isSecondValue === false) {
      getSecondValue(atr);
    }
  });
}
getSign();
