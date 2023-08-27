function opertionPerform (num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
       case '-':
        return num1 - num2;
        case '*':
          return num1 * num2;
          case '/' :
            return num1 / num2;
            default:
              return 'Invalid operator';
  }
}

const n1 = parseFloat(prompt('Enter the first number:'));
const n2 = parseFloat(prompt('Enter the second number:'));
const operator = prompt('Enter the opertor (+, -, *, /):');


const result = opertionPerform ( n1, n2 , operator);

if(typeof result === 'number') {
  console.log( `Result: ${result}`);
}else {
  console.log(result);
}
