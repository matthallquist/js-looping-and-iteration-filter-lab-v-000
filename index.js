// Code your solution in this file
function findMatching(array, condition) {
  return array.filter(instance => instance.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(array, partialName) {
  partialName = partialName.split("");
  letterQty = partialName.length - 1;
  let newArray = []
  for (const instance of array) {
    newArray.push(instance.split(""));
  }
  newArray.filter(instance => instance[0, letterQty] === partialName);

}
