// Code your solution in this file
function findMatching(array, condition) {
  return array.filter(instance => instance.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(array, partialName) {
  partialName = partialName.split("");
  letterQty = partialName.length;
  return array[0,letterQty];
}
