var reverseWords = function(s) {
    const str = s.trim();
    if (!str) {
      return ''
    }
    const strArr = s.split(' ').filter(item => item);
    let result = '';
    for (let i = strArr.length - 1; i >= 0; i--) {
      result += strArr[i] + ' '
    }
    return result;
};
reverseWords("a good   example");
