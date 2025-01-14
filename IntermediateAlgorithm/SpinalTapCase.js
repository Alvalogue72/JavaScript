// V1
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
  }
  
console.log(spinalCase('This Is Spinal Tap'));

// V2
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  spinalCase("This Is Spinal Tap");