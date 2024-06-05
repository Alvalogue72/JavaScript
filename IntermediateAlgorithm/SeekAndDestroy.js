function destroyer(arr, ...num) {
    return arr.filter(item => !num.includes(item));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));