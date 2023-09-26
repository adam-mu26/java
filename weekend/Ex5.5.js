function initials(name) {
  const nameArray = name.split(" ");
  if (nameArray.length === 2) {
    const firstInitial = nameArray[0][0].toUpperCase();
    const secondInitial = nameArray[1][0].toUpperCase();
    return `${firstInitial}.${secondInitial}`;
  } else {
  
    return "Invalid input";
  }
}

// Test cases
console.log(initials("Sam Harris")); 
console.log(initials("John Doe")); 

