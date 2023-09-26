function isIsogram(str) {
  str = str.toLowerCase();

  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) {
      return false;
    } else seen.add(char);
  }

  return true;
}

console.log(isIsogram("hello"));
console.log(isIsogram("Programming"));
