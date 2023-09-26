function findShortestWordLength(str) {
  const words = str.split(" ");
  let shortestLength = Infinity; 

  for (const word of words) {
    const wordLength = word.length;
    if (wordLength < shortestLength) {
      shortestLength = wordLength;
    }
  }

  return shortestLength;
}

// Test cases
console.log(findShortestWordLength("The quick brown fox")); 
console.log(findShortestWordLength("Hello world"));
console.log(findShortestWordLength("Programming is fun")); 
