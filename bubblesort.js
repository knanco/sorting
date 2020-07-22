function bubbleSort(array) {
  if (sort(array) === 0) {
    return array;
  } else {
    return bubbleSort(array)
  }
}

function sort(array) {
  let count = 0
  for (let i = 0; i < array.length - 1; i++) {
    let a = array[i];
    let b = array[i + 1];
    if (compare(a, b)) {
      count++
      array[i] = b;
      array[i + 1] = a;
    }
  }
  return count
}

function compare(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
