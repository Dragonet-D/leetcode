const reverseWords = function(s) {
  // return s.split(" ").map(item => item.split("").reverse().join("")).join(" ")
  // return s.split(/\s/g).map(item => item.split("").reverse().join("")).join(" ")
  return s
    .match(/[\w']+/g)
    .map(item =>
      item
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};

module.exports = reverseWords;
