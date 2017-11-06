'use strict';

var calc = document.querySelector('.calc__options');
var display = document.querySelector('.calc__display');
var firstVal = '';
var secondVal = '';
var operation = '';
var result = 0;

calc.addEventListener('click', function (e) {
  switch (e.target.textContent) {
    case ',':
      console.log(',');
      break;
    case '=':
      printResult(operation);
      break;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (operation === '') {
        printFirstVal(e.target.textContent);
      } else {
        display.textContent = '';
        printSecondVal(e.target.textContent);
      }
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      operation = e.target.textContent;
      break;
    case 'C':
      zeroOut();
      display.textContent = 0;
      break;
    case '+/-':
      console.log('+/-');
      break;
    case '%':
      console.log('%');
      break;
    default:
      console.log('Not assigned yet');
  }
});

var printFirstVal = function printFirstVal(num) {
  firstVal += num;
  firstVal = parseInt(firstVal);
  display.textContent = firstVal;
};

var printSecondVal = function printSecondVal(num) {
  secondVal += num;
  secondVal = parseInt(secondVal);
  display.textContent = secondVal;
};

var printResult = function printResult(op) {
  if (op === '+') {
    result = firstVal + secondVal;
  } else if (op === '-') {
    result = firstVal - secondVal;
  } else if (op === '*') {
    result = firstVal * secondVal;
  } else {
    result = firstVal / secondVal;
  }

  display.textContent = result;

  zeroOut();
};

var zeroOut = function zeroOut() {
  firstVal = '';
  secondVal = '';
  operation = '';
};