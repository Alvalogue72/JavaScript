function findElement(arr, func) {
    let num = 0;
  
    while (num < arr.length && !func(arr[num])) {
      num++;
    }
    return num < arr.length ? arr[num] : undefined;
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));