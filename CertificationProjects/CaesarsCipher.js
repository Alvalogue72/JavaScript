function rot13(str) {
    const arr = str.split("");
    const newArr = [] ;
    const min = 65;
    const max = 90;
  
    for (let i = 0; i < arr.length; i++) {
      let unicode = arr[i].charCodeAt(0);
  
      if (unicode >= min && unicode <= max) {
        for (let cont = 0; cont < 13; cont++) {
          unicode++;
          if (unicode > max) {
            unicode = min;
          }
        }
      }
  
      newArr.push(unicode) ;   
    }
  
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = String.fromCharCode(newArr[i]);
    }
    
    return newArr.join("");
  
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  