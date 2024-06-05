// V1
function repeatStringNumTimes(str, num) {
    let newStr = "" ;
      while (num > 0) {
        newStr += str;
        num--;
      }
    return newStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));

// V2
/* function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  } */

// V3
/* function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  } */
