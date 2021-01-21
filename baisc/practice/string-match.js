function strMatch() {
  const str1 = 'goodgoogle'
  const str2 = 'google'

  let isFind = 0

  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    if (str1[i] === str2[0]) {
      let jc = 0

      for (let j = 0; j < str2.length; j++) {
        if (str1[i + j] !== str2[j]) {
          break
        }
        jc = j
      }

      if (jc === str2.length - 1) {
        isFind = 1
      }
    }
  }
  console.log(isFind)
}

strMatch()