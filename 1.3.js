
// To transform the nested array "[4,[[5],[6,[7],8],9,10]]" into a flattened array [4, 5, 6, 7, 8, 9, 10] , you can use a recursive function. Here's an example implementation:

const _array = [4,[[5],[6,[7],8],9,10]];

function flattenArray(arr) {
  var result = [];
  
  function flattenHelper(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenHelper(arr[i]); // Recursive call for nested arrays
      } else {
        result.push(arr[i]);
      }
    }
  }
  
  flattenHelper(arr);
  return result;
}


var flattenedArray = flattenArray(_array);
console.log(flattenedArray);

// Output:
// [4, 5, 6, 7, 8, 9, 10]

// In this code, the flattenArray function takes an array arr as input. It declares an empty result array and defines a flattenHelper function to recursively iterate through the array elements.

// Inside the flattenHelper function, each element of the array is checked. If an element is itself an array, a recursive call is made to flattenHelper to flatten the nested array. Otherwise, the element is pushed into the result array.

// The flattenHelper function is initially called with the _array, and the flattened array is returned as the final result.

// When you run this code you will see the flattened array [4, 5, 6, 7, 8, 9, 10] logged in the console.
