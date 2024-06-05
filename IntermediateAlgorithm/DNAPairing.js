// V1
function pairElement(str) {
    const pairs = [] ;
    const arr = str.split("") ;
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
      case "C": pairs[i] = ["C", "G"];
      break;
      case "G": pairs[i] = ["G", "C"];
      break;
      case "A": pairs[i] = ["A", "T"];
      break;
      case "T": pairs[i] = ["T", "A"];
      break;
      }
    }
   
    return pairs;
  }
  
console.log(pairElement("GCG"));

// V2
function pairElement(str) {
    // Function to match each character with the base pair
    const matchWithBasePair = function(char) {
      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
  
    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      pairs.push(matchWithBasePair(str[i]));
    }
  
    return pairs;
  }
  
  // test here
  pairElement("GCG");

//   V3
function pairElement(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  
    // map character to array of character and matching pair
    return str
      .split("")
      .map(x => [x, pairs[x]]);
  }
  
  // test here
  pairElement("GCG");
  