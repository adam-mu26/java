function countDuplicates(str) {
  const charCount = {};
  let count = 0;

  str = str.toLowerCase();

  for (const char of str) {
    if (/[a-z 0-9]/.test(char)) {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] === 2) {
        count++;
      }
    }
  }

  return count;
}

console.log(countDuplicates("abcde"));
console.log(countDuplicates("aabbcde"));
