  // solution structure
  function notGate(str) {
   strArray = str.split("");
   for (let i= 0; i < strArray.length; i++) {
      let a = strArray[i];
      if (strArray[i] == "0") {strArray[i]="1"}
      else if (a == "1") {strArray[i]="0"}
      else if (a == "x") {strArray[i]="x"}
    
    }
    let newStr = strArray.join("");
    return newStr;
}

// example
notGate("011x0x"); // 100x1x
