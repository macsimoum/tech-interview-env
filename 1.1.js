function applyFunctionDeclarative(arr, func) {
  return arr.map(func);
}

function applyFunctionImperative(arr, func) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

// Example usage
var numbers = [1, 2, 3, 4, 5];

// Declarative approach
var declarativeResult = applyFunctionDeclarative(numbers, function(item) {
  return item * 2;
});
console.log(declarativeResult); // Output: [2, 4, 6, 8, 10]

// Imperative approach
var imperativeResult = applyFunctionImperative(numbers, function(item) {
  return item * 2;
});
console.log(imperativeResult); // Output: [2, 4, 6, 8, 10]

