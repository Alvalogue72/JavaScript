// V1
function titleCase(str) {
    const words = str.split(" ") ;
    const newStr = [];
  
    for (let i = 0; i < words.length; i++) {
      newStr[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() ;
    }
    return newStr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));
  
  console.log(titleCase("sHoRt AnD sToUt"));

// V2
/* function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
} */
  