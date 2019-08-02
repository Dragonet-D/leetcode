var lengthOfLastWord = function(s) {
    let count = 0;
    let localCount = 0;
    for (const value of s) {
      if(value === ' ') {
           localCount = 0
       } else {
           localCount += 1;
           count = localCount;
       }
    }
    return count
};

console.log(lengthOfLastWord('hello world'));