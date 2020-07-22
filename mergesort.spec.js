describe('Split Array function', function() {
  it('can split an odd array', function () {
    const arr = [3, 4, 5, 6, 7]
    expect(split(arr)).toEqual([[3,4], [5,6,7]])
  })

  it('can split an even array', function(){
    const arr = [2, 10, 4, 5, 7, 9]
    expect(split(arr)).toEqual([[2, 10, 4], [5, 7, 9]])
  })
})

describe('Merge function', function() {
  it ('can sort two arrays of size 1', function() {
    const firstArray = [3]
    const secondArray = [1]
    expect(merge(firstArray, secondArray)).toEqual([1, 3])
  })

  it('is able to merge two sorted arrays into one sorted array', function(){
    const firstArray = [1, 4, 7]
    const secondArray = [2, 3, 6, 8]
    expect(merge(firstArray, secondArray)).toEqual([1, 2, 3, 4, 6, 7, 8])
  })
})
