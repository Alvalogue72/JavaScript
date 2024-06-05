function findLongestWordLength(str) {
    let maxLength = 0;
    let newLength = 0 ;
  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (newLength > maxLength) {
                maxLength = newLength ;
            }
            newLength = 0;
        } else {
            newLength++;
        }

        if (newLength > maxLength) {
            maxLength = newLength ;
        }
    }
    return maxLength;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));