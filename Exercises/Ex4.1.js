function fibonacciIterative(n) {
  let a = 0;
  let b = 1;
  let temp;

  if (n === 0) {
    return a;
  }

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}
