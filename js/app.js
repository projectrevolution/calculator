const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const del = document.querySelector(".delete");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const plus = document.querySelector(".plus");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const minus = document.querySelector(".minus");
const dot = document.querySelector(".dot");
const zero = document.querySelector(".zero");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const resetValues = document.querySelector(".reset");
const result = document.querySelector(".result");
const resultInput = document.querySelector(".resultInput");
const reset = document.querySelector(".equals");

let arr = [];
let reduceNums = 0;

let num7Result;
let num8Result;
let num9Result;
let deleteValue;

let num4Result;
let num5Result;
let num6Result;
let plusResult;

let num1Result;
let num2Result;
let num3Result;
let minusValue = false;

let dotValue = false;
let zeroValue;
let divideValue = false;
let multiplyValue = false;
let plusValue = false;

let resetValue = false;

num7.addEventListener("click", (e) => {
  num7Result = parseInt(num7.value);
  arr.push(num7Result);
  console.log("arr should have 7 ", arr);
});

num8.addEventListener("click", (e) => {
  num8Result = parseInt(num8.value);
  arr.push(num8Result);
  console.log("arr should have 8 ", arr);
});

num9.addEventListener("click", (e) => {
  num9Result = parseInt(num9.value);
  arr.push(num9Result);
  console.log("arr should have 9 ", arr);
});

del.addEventListener("click", (e) => {
  deleteValue = null;
});

num4.addEventListener("click", (e) => {
  num4Result = parseInt(num4.value);
  arr.push(num4Result);
  console.log("arrr should have 4 ", arr);
});

num5.addEventListener("click", (e) => {
  num5Result = parseInt(num5.value);
  arr.push(num5Result);

  console.log("arrr should have 5 ", arr);
});

num6.addEventListener("click", (e) => {
  num6Result = parseInt(num6.value);
  arr.push(num6Result);

  console.log("arrr should have 6", arr);
});

plus.addEventListener("click", (e) => {
  if (plus.value) {
    plusValue = true;
  }
  console.log(plus.value);
  plusResult = plus.value;
});

num1.addEventListener("click", (e) => {
  num1Result = parseInt(num1.value);
  arr.push(num1Result);

  console.log("arrr should have 1", arr);
  console.log(num1Result);
});

num2.addEventListener("click", (e) => {
  num2Result = parseInt(num2.value);
  arr.push(num2Result);

  console.log(num2Result);
});

num3.addEventListener("click", (e) => {
  num3Result = parseInt(num3.value);
  arr.push(num3Result);
  console.log(num3Result);
});

minus.addEventListener("click", (e) => {
  if (minus.value) {
    minusValue = true;
  }
  console.log(minusValue);
});

dot.addEventListener("click", (e) => {
  if (dot.value) {
    dotValue = true;
  }
  console.log(dotValue);
});

zero.addEventListener("click", (e) => {
  zeroValue = parseInt(zero.value);
  arr.push(zeroValue);
  console.log(zeroValue);
});

divide.addEventListener("click", (e) => {
  if (divide.value) {
    divideValue = true;
  }
  console.log(divideValue);
});

multiply.addEventListener("click", (e) => {
  if (multiply.value) {
    multiplyValue = true;
  }
  console.log(multiplyValue);
});

function addValues(arr) {
  let reduceNums = arr.reduce((pre, curr) => {
    return pre + curr;
  });
  console.log("the nums summed are ", reduceNums);

  document.getElementById("inputId").value = reduceNums;
}

function substract(arr) {

  console.log('the arr is inside subtract ', arr);

  let total = arr.reduce((pre, curr) => {
    return pre - curr;
  });

  document.getElementById("inputId").value = total;
}

// function multiplication(arr) {
//   
//   loop over array and then multiply each element
// }

// function division(arr) {
//   loop over array and then divide each element
// }

function getResults() {
  if (plusValue == true) {
    console.log(addValues(arr));
  } 
 
  else if (minusValue == true) {
    console.log(substract(arr));
  } 
  
  else if (multiplyValue == true) {
    console.log(multiplication(arr));
  } 
  
  else if (divideValue == true) {
    console.log(division(arr));
  }
}

function resetArr() {
 
    document.getElementById("inputId").value = "";
    arr = [];
}