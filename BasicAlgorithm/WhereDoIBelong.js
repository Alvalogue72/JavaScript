// V1
function getIndexToIns(arr, num) {

    arr.push(num) ;
    arr.sort(function(a, b){return a-b}) ;
    console.log(arr) ;
  
    return arr.indexOf(num);
      
    }
    
  console.log(getIndexToIns([40, 60], 50)); 
  console.log(getIndexToIns([3, 10, 5], 3)) ;

// V2
/* function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) return i;
    }
  
    return arr.length;
  } */