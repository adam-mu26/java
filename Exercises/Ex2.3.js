function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq);
    if (Number.isInteger(sqrt)) {
      const nextSquare = Math.pow(sqrt + 1, 2);
      return nextSquare;
    } else {
      return -1;
    }
  }
  
  const result1 = findNextSquare(16);
  console.log(result1); 
  
  const result2 = findNextSquare(5);
  console.log(result2);