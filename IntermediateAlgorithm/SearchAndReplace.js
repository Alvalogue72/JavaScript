function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  
  console.log(myReplace("His name is Tom", "Tom", "john"));