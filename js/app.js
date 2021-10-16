const buttonValue = document.querySelectorAll("button");
const resultValue = document.getElementById("inputId");
const resultInput = document.querySelector(".inputTag");
const plus = document.querySelector(".plus");

let minusValue = false;
let dotValue = false;
let zeroValue;
let divideValue = false;
let multiplyValue = false;
let plusValue = false;
let equalValue = false;
let resetValue = false;

let arr = [];
let buttonText = [];

buttonValue.forEach((element) => {
  console.log(element);
  element.addEventListener("click", (e) => {
    buttonText = e.target.innerHTML;
    console.log(buttonText);

    let firstValue = (resultValue.value += buttonText);

     if (buttonText === "+") {
      plusValue = true;
      console.log(plusValue);
      
    }
    else if (typeof Number(firstValue) === "number") {
      arr.push(firstValue);

    }
   

    //   if (buttonText === "+") {
    //     plusValue = true;
    //   } else {
    //     let value = parseInt(firstValue);
    //     arr.push(value);
    //     console.log("arr has", value);
    //   }
  });
});

// plus.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   let plusResult = e.target.innerHTML;
// });

function addValues(arr) {
  console.log("the arr in add values function is ", arr);
  let reduceNums = arr.reduce((pre, curr) => {
    return pre + curr;
  });

  // const html = `<p style="color:white">${reduceNums}</p>`

  // document.querySelector('.test').innerHTML = html;

  // let myInput = document.querySelector('input[name="inputResult"]');

  // myInput.value = reduceNums;
  // console.log(result);
  // console.log('my input value is ', myInput.value);
console.log(resultValue);
  resultValue.innerText = reduceNums.toString();
  console.log("the result value is ", resultValue.value);
}

function getResults() {
  console.log("get results invoked");
  if (plusValue == true) {
    console.log(plusValue);
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

function resetInput() {
  document.getElementById("inputId").value = "";
}
