function reverseString(str) {
    let reverse = "" ;
    for (let i = 1; i <= str.length; i++) {
      reverse += str[str.length - i]
    }
    return reverse;
  }
  
  console.log(reverseString("hello"));