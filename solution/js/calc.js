/* START OF STARTER CODE: You should not need to modify these functions. */
function calculate(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
      // Notice that we don't have break statements because
      // return will already break for us.

    case '-':
      return value1 - value2;

    case '*':
      return value1 * value2;

    case '/':
      return value1 / value2;

    case '%':
      return value1 % value2;

    case '^':
      return Math.pow(value1, value2);
    
    default:
      return false;
  }  
}
/* END OF STARTER CODE */

/* Calculator Logic */
var result = 0;
var curValue1 = 0;
var curValue2 = false;
var decimalPlace = 0;
var curOperation = false;
var hasDecimalBeenPressed = false;

function updateDisplay(value) {
  var valueString = value.toString();

  /* SOLUTION */
  // Update the fontsize to fit exactly the number of digits.
  var numDigitsOneEm = 30;
  document.getElementById("result").style.fontSize = Math.min(3.5, numDigitsOneEm / valueString.length - 0.3) + "em";
  /* END SOLUTION */

  // Display the value.
  document.getElementById("result").value = valueString;
}

function updateValue(number) {
  var maxValue = 9e10;

  if (curOperation) { // if an operation has been selected, update value2
    if (curValue2 === false) {
      curValue2 = 0;
    }

    if (curValue2 > maxValue) {
      return;
    }
    if (hasDecimalBeenPressed) {
      decimalPlace++;
      curValue2 += Math.pow(10, -decimalPlace) * number;
    } else {
      curValue2 = 10 * curValue2 + number;
    }
    updateDisplay(curValue2);
  } else {
    if (curValue1 > maxValue) {
      return;
    }

    if (hasDecimalBeenPressed) {
      decimalPlace++;
      curValue1 += Math.pow(10, -decimalPlace) * number;
    } else {
      curValue1 = 10 * curValue1 + number;
    }
    updateDisplay(curValue1);
  }
}

function updateDecimal() {
  hasDecimalBeenPressed = true;
}

function setOperation(op) {
  if (curValue2) {
    return;
  }

  curOperation = op;
}

function compute() {
  if (!curValue2) {
    return;
  }

  result = calculate(curOperation, curValue1, curValue2)
  if (result !== false) {
    curValue1 = 0;
    curValue2 = false;
    curOperation = false;
    updateDisplay(result);
  }
}

function flipSign() {
  if (curValue2 !== false) {
    curValue2 = -curValue2;
    updateDisplay(curValue2);
  } else {
    curValue1 = -curValue1;
    updateDisplay(curValue1);
  }
}

function clearValue() {
  if (curValue2 !== false) {
    curValue2 = 0;
  } else  {
    curValue1 = 0;
  }

  updateDisplay(0);
}

/* Event listeners */
document.getElementById("btn-0").addEventListener("click", function () {
  updateValue(0);
});

document.getElementById("btn-1").addEventListener("click", function () {
  updateValue(1);
});

document.getElementById("btn-2").addEventListener("click", function () {
  updateValue(2);
});

document.getElementById("btn-3").addEventListener("click", function () {
  updateValue(3);
});

document.getElementById("btn-4").addEventListener("click", function () {
  updateValue(4);
});

document.getElementById("btn-5").addEventListener("click", function () {
  updateValue(5);
});

document.getElementById("btn-6").addEventListener("click", function () {
  updateValue(6);
});

document.getElementById("btn-7").addEventListener("click", function () {
  updateValue(7);
});

document.getElementById("btn-8").addEventListener("click", function () {
  updateValue(8);
});

document.getElementById("btn-9").addEventListener("click", function () {
  updateValue(9);
});

document.getElementById("btn-decimal").addEventListener("click", function () {
  updateDecimal();
});

document.getElementById("btn-add").addEventListener("click", function () {
  setOperation('+');
});

document.getElementById("btn-sub").addEventListener("click", function () {
  setOperation('-');
});

document.getElementById("btn-mul").addEventListener("click", function () {
  setOperation('*');
});

document.getElementById("btn-div").addEventListener("click", function () {
  setOperation('/');
});

document.getElementById("btn-mod").addEventListener("click", function () {
  setOperation('%');
});

document.getElementById("btn-compute").addEventListener("click", function () {
  compute();
});

document.getElementById("btn-neg").addEventListener("click", function () {
  flipSign();
});

document.getElementById("btn-clr").addEventListener("click", function () {
  clearValue();
});

