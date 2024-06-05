function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  
  console.log(confirmEnding("Open sesame", "same"));