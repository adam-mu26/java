function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
  }
  if (value2 === 0) {
    return "Division by zero is not allowed";
  }
  return value1 / value2;
}
