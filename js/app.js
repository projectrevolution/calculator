const buttonValue = document.querySelectorAll(".buttons");
const displayScreen = document.getElementById("inputId");

let firstValue;

buttonValue.forEach((element) => {
  element.addEventListener("click", (e) => {
    firstValue = displayScreen.value += e.target.value;
  });
});

function getResults() {
  console.log("the first value passed into the function is ", firstValue);

  console.log("the eval function is ", eval(firstValue));
  displayScreen.value = eval(firstValue);
}

function resetInput() {
  document.getElementById("inputId").value = "";
}
