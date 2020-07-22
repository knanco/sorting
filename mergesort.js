function split (array) {
  let midpoint = Math.floor(array.length / 2)
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint)
  return [firstHalf, secondHalf]
}

function merge (firstArray, secondArray) {
  let output = []
  let len = firstArray.length + secondArray.length

  let j = 0
  let k = 0

  for (let i = 0; i < len; i++) {
    if (firstArray[j] === undefined || secondArray[k]=== undefined) {
      if(firstArray[j]) {
        output.push(...firstArray.slice(j))
      } else if (secondArray[k]) {
        output.push(...secondArray.slice(k))
      }
      break
    } else if (firstArray[j] < secondArray[k]) {
      output.push(firstArray[j])
      j++
    } else {
      output.push(secondArray[k])
      k++
    }
  }
  //return an array that's sorted
  return output
}
