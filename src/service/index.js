function infixToRPN(expression) {
  const operators = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  const isOperator = (char) => operators.hasOwnProperty(char);

  function hasHigherPrecedence(op1, op2) {
    return operators[op1] >= operators[op2];
  }

  const outputQueue = [];
  const operatorStack = [];

  expression = expression.replace(/\s+/g, ""); // 移除所有空格

  for (let i = 0; i < expression.length; i++) {
    const token = expression[i];

    if (!isNaN(token)) {
      outputQueue.push(token); // 如果是数字，直接输出到队列
    } else if (isOperator(token)) {
      while (
        operatorStack.length > 0 &&
        isOperator(operatorStack[operatorStack.length - 1]) &&
        hasHigherPrecedence(operatorStack[operatorStack.length - 1], token)
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== "("
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.pop(); // 弹出左括号
    }
  }

  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }

  return outputQueue.join(" ");
}

const infixExpression = "-4+2";
const rpnExpression = infixToRPN(infixExpression);
console.log(`逆波兰表达式：${rpnExpression}`);

console.log(infixToRPN("2+2*1"));
console.log(infixToRPN("-5*3+1"));
console.log(infixToRPN("1-2*3"));
