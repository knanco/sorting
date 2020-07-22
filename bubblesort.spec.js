describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one item', function() {
    expect(bubbleSort([2])).toEqual([2]);
  });

  it('can handle an array with two items', function() {
    expect(bubbleSort([6, 4])).toEqual([4, 6]);
  });

  it('can fully sort an array', function() {
    expect(bubbleSort([9, 2, 5, 1, 0, 43])).toEqual([0, 1, 2, 5, 9, 43]);
  });
});
