function maskify(str) {
  if (str.length <= 4) {
   
    return str;
  } else {

    const maskedChars = "#".repeat(str.length - 4);
    const visibleChars = str.slice(-4);
    return maskedChars + visibleChars;
  }
}


console.log(maskify("1234567890")); 
console.log(maskify("abqfef"));

