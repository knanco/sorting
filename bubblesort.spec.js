describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'sort').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it('should compare at most 2n times', function() {
    const input = [9, 8, 7, 1, 0];
    bubbleSort(input);
    expect(window.compare.calls.count()).toBeLessThan(input.length * 2);
  });

  it('expects Sort to have been called array.length times', function() {
    bubbleSort([9, 8, 7, 1, 0]);
    expect(window.sort.calls.count()).toEqual(5);
  });

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
