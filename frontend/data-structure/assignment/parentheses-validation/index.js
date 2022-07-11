const Stack = require("./stack");

function IsValidParentheses(s) {
  // TODO: answer here
  let isValid;
  let stackArr = [];

  if (s.length == 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let lastChar = stackArr[stackArr.length - 1];

    if (char == "(" || char == "{" || char == "[") {
      stackArr.push(char);
    } else if (
      (lastChar == "(" && char == ")") ||
      (lastChar == "{" && char == "}") ||
      (lastChar == "[" && char == "]")
    ) {
      stackArr.pop();
    } else return false;
  }

  isValid = stackArr.length ? false : true;

  return isValid;
}

module.exports = {
  IsValidParentheses,
};
