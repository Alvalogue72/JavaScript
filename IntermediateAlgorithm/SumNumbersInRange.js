// MY VERSION
function sumAll(arr) {
    let myArray = [] ;
    let sum = 0;
    myArray = arr.sort((a,b) => a-b)
    while (myArray[0] <= myArray[1]) {
      sum += myArray[0] ;
      myArray[0]++
    }
    
    return sum;
  }

// V1
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]))
  console.log(sumAll([5, 10]))
  console.log(sumAll([10, 5]))