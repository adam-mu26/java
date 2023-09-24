function centuryFromYear(year) {
    const century = Math.ceil(year / 100);
    return century;
  }
  
  const year1 = 1905;
  const century1 = centuryFromYear(year1);
  console.log(century1); 
  
  const year2 = 1700;
  const century2 = centuryFromYear(year2);
  console.log(century2); 