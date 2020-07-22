function bubbleSort(array) {
  if (array.length === 0) {
    return array;
  } else {
    sort(array);
  }
  return [...bubbleSort(array.slice(0, array.length - 1)), array[array.length - 1]];
}

function sort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let comparisonItem = array[i];
    let comparedItem = array[i + 1];
    if (compare(comparisonItem, comparedItem)) {
      let temp = comparisonItem;
      array[i] = comparedItem;
      array[i + 1] = temp;
    }
  }
}

function compare(comparisonItem, comparedItem) {
  if (comparisonItem > comparedItem) {
    return true;
  } else {
    return false;
  }
}

//TEST
const input = [3, 2, 1];
bubbleSort(input); //?
