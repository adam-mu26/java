function findUniq(arr) {
    arr.sort((a, b) => a - b);
    
    if (arr[0] === arr[1]) {
      return arr[arr.length - 1];
    } else {
      return arr[0]; 
    }
  }
  const result1 = findUniq([1, 1, 1, 2, 1, 1]);
  console.log(result1); 
  
  const result2 = findUniq([0, 0, 0.55, 0, 0]);
  console.log(result2); 