const calc    = document.querySelector('.calc__options');
const display = document.querySelector('.calc__display');
let firstVal = '';
let secondVal = '';
let operation = '';
let result = 0;

calc.addEventListener('click', function(e) {
  switch (e.target.textContent) {
    case '0':
      console.log('0');
      break;
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
      firstVal = '';
      secondVal = '';
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

const printFirstVal = (num) => {
  firstVal += num;
  firstVal = parseInt(firstVal);
  display.textContent = firstVal;
};

const printSecondVal = (num) => {
  secondVal += num;
  secondVal = parseInt(secondVal);
  display.textContent = secondVal;
}

const printResult = (op) => {
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
}
