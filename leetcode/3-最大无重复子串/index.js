var lengthOfLongestSubstring = function(s) {
  let arr = []
  let i = 0
  for (let a of s) {
    let index = arr.indexOf(a)
    if(index < 0){
      arr.push(a)
    }else{
      if(i < arr.length){
        i = arr.length
      }
      arr.splice(0,index+1)
      arr.push(a)
    }
  }
  if(i<arr.length){
    i = arr.length
  }
  return i
}