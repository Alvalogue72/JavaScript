function uniteUnique(...arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (!newArr.includes(arr[i][j])) {
          newArr.push(arr[i][j])
        }
        
      }
    }
    return newArr;
  }  
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));