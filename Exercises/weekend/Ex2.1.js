function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function(a, b) {
      return a - b;
    });
    
    const lowestNumbers = numbers.slice(0, 2);
    const sum = lowestNumbers.reduce(function(a, b) {
      return a + b;
    }, 0);
    
    return sum;
  }
  
 
  const result4 = sumTwoSmallestNumbers([19, 5, 42, 2, 77]);
  console.log(result4); 
  
  const result3 = sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);
  console.log(result3);