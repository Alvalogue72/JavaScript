function convertHTML(str) {
    const arr = str.split("");
  
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "<":
          arr[i] = "&lt;";
          break;
        case "&":
          arr[i] = "&amp;";
          break;
        case ">":
          arr[i] = "&gt;";
          break;
        case '"':
          arr[i] = "&quot;";
          break;
        case "'":
          arr[i] = "&apos;";
          break;
      }
    }
  
    str = arr.join("");
    
    return str;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));