const buttonValue = document.querySelectorAll("button");
const result = document.getElementById("inputId");
const resultInput = document.querySelector(".resultInput");

buttonValue.forEach((element) => {
  element.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;

    result.value += buttonText;
    console.log(result.value);
  });
});

function addValues(arr) {
  let reduceNums = arr.reduce((pre, curr) => {
    return pre + curr;
  });
  console.log("the nums summed are ", reduceNums);

  document.getElementById("inputId").value = reduceNums;
}


function resetArr() {
  document.getElementById("inputId").value = "";
  arr = [];
}
