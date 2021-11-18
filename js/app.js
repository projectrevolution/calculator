const buttonValue = document.querySelectorAll(".buttons");
const displayScreen = document.getElementById("inputId");

let firstValue;

buttonValue.forEach((element) => {
  element.addEventListener("click", (e) => {
    firstValue = displayScreen.value += e.target.value;
  });
});

function getResults() {

  displayScreen.value = eval(firstValue);
}

function resetInput() {
  document.getElementById("inputId").value = "";
}
