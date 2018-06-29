// Code your solution in this file
function findMatching(array, condition) {
  return array.filter(instance => instance.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(array, partialName) {
  partialName = partialName.split("");
  letterQty = partialName.length;
  let newArray = []
  for (const instance of array) {
    console.log(instance);
  }
}
