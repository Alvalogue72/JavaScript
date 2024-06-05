function palindrome(str) {
    let newStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const arr = newStr.split("") ;
    let palindrome = arr.reverse().join("");
  
    return newStr === palindrome;
  }
  
  console.log(palindrome("eye"));
  
  console.log(palindrome("A man, a plan, a canal. Panama"))
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  
  console.log(palindrome("not a palindrome"))