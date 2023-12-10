// Scenario 1 - Modify Array with Methods

// Initialize an array with some initial elements
let aArray: number[] = [1, 2, 3, 4, 5];
console.log("Initial Array:", aArray);

// Using push to add new elements to the end of the array
aArray.push(6, 7);
console.log("Array after push:", aArray);

// Using pop to remove the last element from the array
const poppedElement = aArray.pop();
console.log("Popped Element:", poppedElement);
console.log("Array after pop:", aArray);

// Using shift to remove the first element from the array
const shiftedElement = aArray.shift();
console.log("Shifted Element:", shiftedElement);
console.log("Array after shift:", aArray);

// Using unshift to add new elements to the beginning of the array
aArray.unshift(-1, 0);
console.log("Array after unshift:", aArray);

// Scenario 2 - Subarray Creation

// Original array
let originalArray: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

// Using splice to create a subarray by removing elements from the original array
const splicedElements: number[] = originalArray.splice(2, 2); // Removes 2 elements starting from index 2
console.log("Subarray using splice:", splicedElements);
console.log("Array after splice:", originalArray);

// Reset the original array
originalArray = [1, 2, 3, 4, 5];

// Using slice to create a subarray without modifying the original array
const slicedArray: number[] = originalArray.slice(1, 4); // Extracts elements from index 1 to index 3 (exclusive)
console.log("Subarray using slice:", slicedArray);
console.log("Original array after slice:", originalArray);
