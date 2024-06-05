// V1
function translatePigLatin(str) {

  let myReg = /^[^aeiou]+/

  return myReg.test(str) ? str.replace(myReg, "").concat(str.match(myReg)).concat("ay") : str.concat("way");
  
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));

//  V2
function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  // test here
  translatePigLatin("consonant");