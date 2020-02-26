function setZeroes(matrix) {
  const rowLen = matrix.length
  const colLen = matrix[0].length

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] === 0 && 1 / matrix[i][j] > 0) {
        for (let rowl = 0; rowl < rowLen; rowl++) {
          if (matrix[rowl][j] !== 0) {
            matrix[rowl][j] = -0
          }
        }
        for (let coll = 0; coll < colLen; coll++) {
          if (matrix[i][coll] !== 0) {
            matrix[i][coll] = -0
          }
        }
      }
    }
  }
}