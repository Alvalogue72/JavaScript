function factorialize(num) {
    let fact = 1;
    while (num > 0) {    
      fact *= num ;
      num--
    }
    return fact;
  }
  
  console.log(factorialize(5));

/*   function factorialize(num) {
    if (num <= 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5); */