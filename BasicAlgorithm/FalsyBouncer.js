// V1
function bouncer(arr) {
    const newArr = [] ;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]){
        newArr.push(arr[i]) ;
      }
    }
    return newArr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  
  console.log(bouncer([false, null, 0, NaN, undefined, ""])) ;

// V2
/* function bouncer(arr) {
    return arr.filter(Boolean);
  } */