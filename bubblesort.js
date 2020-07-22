function bubbleSort(array) {
  if (array.length === 0) {
    return array;
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      let comparisonItem = array[i];
      let comparedItem = array[i + 1];

      if (comparisonItem > comparedItem) {
        let temp = comparisonItem;
        array[i] = comparedItem;
        array[i + 1] = temp;
      }
    }
  }
  return [...bubbleSort(array.slice(0, array.length - 1)), array[array.length - 1]];
}
