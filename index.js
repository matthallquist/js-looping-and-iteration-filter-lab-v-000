// Code your solution in this file
function findMatching(array, condition) {
  return array.filter(instance => instance.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(array, partialName) {
  return array;
  partialName = partialName.split("");
  letterQty = partialName.length;
  let newArray = []
  for (const instance of array) {
    newArray.push(instance.split(""));
  }
  return newArray;
}
