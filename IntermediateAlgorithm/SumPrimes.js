function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  function isPrime(num) {
    let i = 2;
    while (i < num/2 && num % i !== 0) {
      i++;
    }
    return i > num/2;
  }
  
  console.log(sumPrimes(10));