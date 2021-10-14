const buttonValue = document.querySelectorAll("button");
const result = document.getElementById("inputId");
const resultInput = document.querySelector(".resultInput");

let minusValue = false;
let dotValue = false;
let zeroValue;
let divideValue = false;
let multiplyValue = false;
let plusValue = false;

let resetValue = false;

let arr = [];

buttonValue.forEach((element) => {
  element.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;
    let firstValue =  result.value += buttonText;
  

    if (buttonText === '+' || buttonText === '=') {
      plusValue = true;
    }
    else {
      let value = parseInt(firstValue);
      arr.push(value)
      console.log('arr has', value);
    }
    

  });
});

function addValues(arr) {
  console.log('the arr in add values function is ', arr);
  let reduceNums = arr.reduce((pre, curr) => {
    return pre + curr;
  });

  console.log('reduced nums ', reduceNums);
  
  document.getElementById("inputId").value = reduceNums.toString();
}

function getResults() {
  if (plusValue == true) {
    addValues(arr);
  } 
 
  // else if (minusValue == true) {
  //   console.log(substract(arr));
  // } 
  
  // else if (multiplyValue == true) {
  //   console.log(multiplication(arr));
  // } 
  
  // else if (divideValue == true) {
  //   console.log(division(arr));
  // }
}


function resetArr() {
  document.getElementById("inputId").value = "";
  arr = [];
}
