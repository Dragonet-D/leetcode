function buddleSort(arr) {
  let hasChange = true;
  for (let i = 0; (i < arr.length - 1) && hasChange; i++) {
    hasChange = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        hasChange = true
      }
    }
  }

  return arr
}

function buddleSort1(arr) {
  for (let i = arr.length - 1; i >= 0;) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

console.log(buddleSort1([1,3,2,4,5,7,6]));