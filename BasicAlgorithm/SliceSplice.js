// V1
function frankenSplice(arr1, arr2, n) {

    const newArr = arr2.slice() ;

    for (let i = 0; i < arr1.length; i++) {
      newArr.splice(n + i, 0, arr1[i]) ;
    }
    return newArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// V2
/* function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    return newArr;
  } */