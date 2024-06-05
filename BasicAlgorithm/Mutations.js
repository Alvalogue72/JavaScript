// V1
function mutation(arr) {
    const words1 = arr[0].toLowerCase().split('') ;
    const words2 = arr[1].toLowerCase().split('');
    let i = 0 ;
    
    while (i < words2.length && words1.includes(words2[i])) {
      i++;
    }
    return i >= words2.length;
  }
  
  console.log(mutation(["hello", "hey"]));

// V2
function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }