// V1
function diffArray(arr1, arr2) {
    const newArr = [];
  
    function subDiffArray(subArr1, subArr2) {
      for (let i = 0; i < subArr2.length; i++) {
        if (subArr1.indexOf(subArr2[i]) === -1) {
            newArr.push(subArr2[i])
        }
      }
    }
    
    subDiffArray(arr1, arr2) ;
    subDiffArray(arr2, arr1) ;
  
    return newArr;
  }

// V2
function diffArray(arr1, arr2) {
return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));