function sumFibs(num) {
    let sum = 0;
    let result = 0;
    let temp = 1;
    while(sum <= num) {
      if (sum % 2 !== 0) {
        result += sum;
      }
      sum += temp;
      temp = sum - temp;
      
    }
    return result;
  }
  
  sumFibs(4);
  console.log(sumFibs(1000))