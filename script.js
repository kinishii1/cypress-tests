let screenValue = '';

const updateScreen = () => {
  const screenResultElement = document.getElementById('result');
  screenResultElement.textContent = screenValue.replace(/\./g, ',');
};

const addToScreen = (value) => {
  screenValue += value;
  updateScreen();
};

const del = () => {
  screenValue = screenValue.slice(0, -1);
  updateScreen();
};

const reset = () => {
  screenValue = '';
  updateScreen();
};

const showResult = () => {
  screenValue = caculateResult();
  updateScreen();
};

const calc = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+':
      return (firstValue + secondValue).toFixed(2);
    case '-':
      return (firstValue - secondValue).toFixed(2);
    case 'x':
      return (firstValue * secondValue).toFixed(2);
    case '/':
      return (firstValue / secondValue).toFixed(2);
    default:
      return null;
  }
};

const caculateResult = () => {
  const numbers = screenValue.match(/\d\.*\d*/g) || [];
  const operators = screenValue.match(/[+\-x/]/g);

  if (screenValue[0] === '-') {
    numbers[0] = Number(numbers[0]) * (-1);
    operators.splice(0, 1);
  }

  while (numbers.length > 1) {
    const [firstNumber, secondNumber] = numbers;
    const operator = operators[0];
    const result = calc(Number(firstNumber), Number(secondNumber), operator);
    numbers.splice(0, 2, result);
    operators.splice(0, 1);
  }

  const total = numbers[0] || 0;
  return String(total);
};

const setNumbersAndOperators = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('click', ({ target }) => {
      addToScreen(target.textContent);
    });
  });
};

const setDel = () => {
  const delKey = document.querySelector('#del');
  delKey.addEventListener('click', del);
};

const setReset = () => {
  const resetKey = document.querySelector('#reset');
  resetKey.addEventListener('click', reset);
};

const setEquals = () => {
  const equalsKey = document.querySelector('#equals');
  equalsKey.addEventListener('click', showResult);
};

window.onload = () => {
  setNumbersAndOperators();
  setDel();
  setReset();
  setEquals();
};
