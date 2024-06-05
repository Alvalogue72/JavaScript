// V1
function chunkArrayInGroups(arr, size) {
    const newArr = [] ;
    for (let i = 0; i < arr.length; i++) {
      if ((size + i) % size === 0) {
        newArr.push(arr.slice(i, size + i))
      }
    }
    
    return newArr;
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// V2
function chunkArrayInGroups(arr, size) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }