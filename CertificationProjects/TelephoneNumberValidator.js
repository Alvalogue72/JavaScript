function telephoneCheck(str) {

    const validNumbers = [
      /^1?\s?\d{3}-\d{3}-\d{4}$/,
      /^1?\s?\(\d{3}\)\d{3}-\d{4}$/,
      /^1?\s?\(\d{3}\)\s\d{3}-\d{4}$/,
      /^1?\s?\d{3}\s\d{3}\s\d{4}$/,
      /^1?\s?\d{10}$/];
    
    return validNumbers.some((regex) => regex.test(str));
  }
  
  console.log(telephoneCheck("555-555-5555"));