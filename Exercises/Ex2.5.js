function summation(num) {
    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
  
    return sum;
  }
  const result = summation(5);
  console.log(result); 